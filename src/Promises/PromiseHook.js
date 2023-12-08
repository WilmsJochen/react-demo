import React, {useEffect, useState} from "react";
import axios from "axios";
import Promises from "q";


export default function PromiseHook(){
    const [ipData, setIpData] = useState("")
    useEffect(() => {
        console.log("syncFunction")
        syncFunction();
        console.log("customPromise")
        customPromise().then( resp =>
            console.log("customPromise executed")
        )
        console.log("asyncFunction")
        asyncFunction().then(resp => {
            console.log("asyncFunction executed")
        });
        console.log("promiseFunction")
        promiseFunction().then(resp => {
            console.log("promise function executed")
        })
        console.log("multiplePromisesCombined")
        multiplePromisesCombined().then(resp => {
            console.log("promise function executed")
        })
    }, []);

    const asyncFunction = async () => {
        try{
            const res = await axios.get("https://ifconfig.me/all");
            return res.data
        }catch (err) {
            console.log("oops something went wrong", err)
        }
    }

    const customPromise = async () => {
        const promise = new Promise((resolve,reject)=> {
            setTimeout(() => {
                resolve("This response is created after a second. ")
            }, 1000);
        })
        console.log("This is logged before second.")
        console.log(await promise)
    }

    const syncFunction = () => {
        axios.get("https://ifconfig.me/all")
        .then(res => {
            setIpData(res.data)
        }).catch(err => {
            console.log("oops something went wrong", err)
        })
        console.log("This is logged before the http call is done.")
    }

    const promiseFunction = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get("https://ifconfig.me/all")
                .then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
            })
        })
        console.log(promise);
        console.log("This is logged before the http call is done.")
        console.log(await promise);
        console.log("This is logged after the http call is done.")
    }

    const multiplePromisesCombined = async () => {
        const promisesToWaitFor = [];
        promisesToWaitFor.push(axios.get("https://ifconfig.me/all"))
        promisesToWaitFor.push(axios.get("https://ifconfig.me/all.json"))
        promisesToWaitFor.push(axios.get("https://ifconfig.me/mime"))
        promisesToWaitFor.push(axios.get("https://ifconfig.me/ip"))

        //wait for all promises to be resolved
        await Promises.allSettled(promisesToWaitFor)
        console.log(promisesToWaitFor);
        console.log("This is logged after all the http calls are done.")
    }

    return (
        <div>
            <h1>
                Promises
            </h1>
            <span>My ip address is: </span>
            <br/>
            <br/>
            <span>{ipData}</span>
        </div>
    )
}