class Cookie {
    constructor(colour) {
        this.colour = colour;
    }
    getColour() {
        return this.colour;
    }
    setColour() {
        this.colour;
    }
}
let cookie1 = new Cookie("brown");
let cookie2 = new Cookie("white");

// console.log(cookie2.getColour())

class LinkedList {
    constructor(value) {}
    push(value){}
    unshift(value){}
    insert(index, value){}
    remove(index){}
    pop(){}
    shift(){}

    getValue() {
        return this.value;
    }
    setValue() {
        this.value
    }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2)
myLinkedList.unshift(3)
myLinkedList.insert(1,4)
myLinkedList.remove(1)
myLinkedList.pop()
myLinkedList.shift()
console.log(myLinkedList.getValue())