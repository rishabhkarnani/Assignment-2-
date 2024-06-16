// Node class definition
class Node {
    constructor(data) {
        this.data = data; // Data on that node
        this.next = null; // Pointer to the next node
    }
}

// LinkedList class definition
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Adds a node at the beginning of the list
    prepend(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Adds a node at the end of the list
    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Inserts a node at the specified index
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return false; // Out of bounds
        }
        let newNode = new Node(data);
        let current = this.head;
        let previous;
        let count = 0;
        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }
        if (!previous) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            previous.next = newNode;
            newNode.next = current;
        }
        this.size++;
        return true;
    }

    // Removes the first node of the list
    removeFirst() {
        if (!this.head) {
            return null;
        }
        let removedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return removedNode;
    }

    // Removes the last node of the list
    removeLast() {
        if (!this.head) {
            return null; // List is empty
        } else if (!this.head.next) {
            this.head = null; // Only one node in the list
        } else {
            let current = this.head;
            let previous;
            while (current.next) {
                previous = current;
                current = current.next;
            }
            previous.next = null;
        }
        this.size--;
        return current;
    }

    // Prints all nodes in the list
    printList() {
        let current = this.head;
        let str = '';
        while(current !== null) {
            str = str + current.data + ' -> ';
            current = current.next;
        }
        console.log(str + 'null');
    }
}

// Create an instance of LinkedList
let myList = new LinkedList();

// Add some nodes to the list
myList.append(10);
myList.append(20);
myList.append(30);

// Print the linked list
myList.printList(); 
