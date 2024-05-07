/* Add Front
Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node
*/
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class SLL {
    constructor() {
        this.head = null
    }

    addFront(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        return this.head
    }

    removeFront() {
        if (!this.head) {
            return null
        }
        const removedNode = this.head
        this.head = this.head.next
        return removedNode
    }

    front() {
        if (!this.head) {
            return null
        }
        return this.head.data
    }

    // DISPLAY FUNCTION ADDED HERE
    display() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + ", ";
            current = current.next;
        }
        // Remove the trailing comma and space
        result = result.slice(0, -2);
        return result;
    }
}

let SLL1 = new SLL()

// addFront
console.log(SLL1.addFront(18)) // => Node { data: 18, next: null}
console.log(SLL1.addFront(5)) // => Node { data: 5, next: Node { data: 18, next: null}}
console.log(SLL1.addFront(73)) // => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null}}}

console.log("\n")

// removeFront
SLL1.removeFront() // => Node { data: 5, next: Node { data: 18, next: null}}
SLL1.removeFront() // => Node { data: 18, next: null}

// front
console.log(SLL1.front()) // => 18
SLL1.removeFront() // => null
console.log(SLL1.front()) // => null

console.log("\n")

// DISPLAY TESTING ADDED HERE
console.log(SLL1.addFront(76)) // => Node { data: 76, next: null}
console.log(SLL1.addFront(2)) // => Node { data: 2, next: Node { data: 76, next: null} }
console.log(SLL1.display()) // => "2, 76"
console.log(SLL1.addFront(11.41)) // => Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null} } }
console.log(SLL1.display()) // => "11.41, 2, 76"
