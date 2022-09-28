/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    
    if(head==null) return;
    let currentNode=head;
    
    let count=0;
    while(currentNode){
        count++;
        currentNode=currentNode.next;
    }
    currentNode=null;
    
    for(let i=0;i<=count-n-1;i++){
        if(i==0) {
            currentNode=head
            continue;
        }
        currentNode=currentNode.next;
    }
    if(currentNode==null) return head.next
    if(currentNode.next){     
        currentNode.next=currentNode.next.next;
        }else{
            currentNode.next=null;
        }
    return head;
};