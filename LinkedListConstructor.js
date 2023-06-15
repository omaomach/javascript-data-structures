class Node {
    constructor(value) {
        this.value = value; // we are passing the value to the new Node we are creating(value to this.value)
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {  // classes always have a constructor, this is what create the object/instance of the class
        let newNode = new Node(value); // 
        this.head = newNode;
        this.tail = this.head;
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let temp = this.head;
        let pre = this.head;
        while(temp.next) {   // if temp.next is pointing to another node
            pre = temp;
            temp = temp.next; // this will move the temp variable over to the next node
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp; 
    }
    unshift(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    shift() {
        if (!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return temp
    }
    get(index) {
        if (index < 0 || index >= this.length) return undefined
        let temp = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
    }
    set(index, value) {
        let temp = this.get(index)
        if (temp) {
            temp.value = value
            return true  // this will make the code to stop running too
        }
        return false
    }
    insert(index, value) {
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        if (index < 0 || index > this.length) return undefined
        const newNode = new Node(value)
        const temp = this.get(index - 1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        let pre = this.get(index - 1)
        let temp = pre.next  // O(1) operation
        pre.next = temp.next
        temp.next = null
        this.length--
        return temp
    }
    reverse() {
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let next = temp.next
        let prev = null
        for (let i = 0; i < this.length; i++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
    }

    findLength() {
        let length = 0
        var temp = this.head
        while (temp != null) {
            length += 1
            temp = temp.next
        }
        return length
    }

    // findMiddleNode() {
    //     if (this.head != null) {
    //         let length = this.findLength()
    //         var temp = this.head
    //         let midpoint = length/2
    //         while (midpoint != 0) {
    //             temp = temp.next
    //             midpoint--
    //         }
    //         console.log(`middle node: ${temp.value}`)
    //     }
    // }

    findMiddleNode() {
        // initialize first and second pointers
        let first = this.head
        let second = this.head
        // iterate through the list
        while (first !== null && first.next !== null) {
            // move second pointer by one step
            second = second.next
            // move second pointer by two steps
            first = first.next.next
        }
        // return middle node when the first reaches the end
        return second
    }

    //// THE HARE AND TORTOISE ALGORITHM IMPLEMENTATION
    hasLoop() {
        // iniatialized two pointers, both pointing to the head linked list
        let slow = this.head
        let fast = this.head

        // traverse the linked list using a while loop. The loop continues as long as fast has not reached the end of the list
        // there should be atleast one more node after the current fast node
        while (fast !== null && fast.next !== null) {
            // move the slow pointer one step forward
            slow = slow.next
            // move the fast pointer 2 steps forward
            fast = fast.next.next
            // check if the two pointers have become equal, if true, it means there is a loop in the LL and the function returns true
            if (fast === slow) {
                return true
            }
        }
        // if the loop terminates without the slow and fast pointers becoming equal, it means the LL has no loop and the function returns false
        return false
    }

    findKthFromEnd(k) {
        let slow = this.head
        let fast = this.head
        for (let i = 0; i < k-1; ++i) {
            if (fast === null) {
                return null
            }
            fast = fast.next
        }
        while (fast !== null) {
            slow = slow.next
            fast = fast.next
        }
        return slow
    }

}

let linkedList = new LinkedList(5)  // the new keyword call the class constructor  165437
linkedList.push(4)
linkedList.push(3)
linkedList.unshift(1)
linkedList.insert(1,6)
linkedList.insert(4,7)
console.log(linkedList.findKthFromEnd(2))