class Processor{

    static Process(data){
        var split = data.split('\n')
        var rows = []

        split.forEach(row=>{
           var array = row.split(",")
           rows.push(array)
        })
        return rows;
    }
}

module.exports=Processor;