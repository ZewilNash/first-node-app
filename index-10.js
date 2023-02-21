const { readFile, writeFile } = require("fs") //need callback
console.log("start");

readFile("./content/result-sync.txt", "utf-8", (error, result) => {
    if (error) {
        console.log(error)
        return
    }

    const first = result
    readFile("./content/sub-folder/second.txt", "utf-8", (error, result) => {
        if (error) {
            console.log(error)
            return
        }

        const second = result

        writeFile("./content/result.txt", `here is the result: ${first} , ${second}` , (err , res) => {
            if(err){
                console.log(err)
            }

            console.log("end")
        })
    })
})

console.log("do again");
//off load this fetching file approch and serve other lines then fetch after done
