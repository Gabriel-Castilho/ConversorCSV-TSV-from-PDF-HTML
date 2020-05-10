class Table{
    constructor(array){
        this.header = array[0];
        //removing first element from array with shift()
        array.shift();
        this.rows=array;
    }

    get RowCount(){

        return this.rows.length;
    }

    get ColumnCount(){
        return this.header.length
    }
}   
module.exports=Table