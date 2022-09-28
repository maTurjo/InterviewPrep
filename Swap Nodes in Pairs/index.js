/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    
    if(!head) return null;
    if(!head.next) return head;
    let currentNode=head;
    let previousNode=null;
    let count=0;
    while(currentNode){
        let nextNode=currentNode.next;
        let tempNode=currentNode.next;
        if(!nextNode) break;
        currentNode.next=tempNode.next;
        nextNode.next=currentNode;
    
        if(previousNode==null){
            head=nextNode;
            previousNode=head;
        }else{
            previousNode.next=nextNode;
        }
        previousNode=previousNode.next;
        currentNode=currentNode.next;  
    }

    return head;
};

//[2,5,3,4,6,2,2]