class Hospital{
    constructor(id,name,phone){
        this.id = id;
        this.name = name;
        this._phone = phone;
    }

    toString(){
        return this.id + '-' + this.name;
    }

    set phone(phone){
        this._phone = phone;
    }

    get phone(){
        return 108;
    }
}

module.exports = Hospital;