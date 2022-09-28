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
    let refObj=new Object({});
    let count=0;
    while(currentNode){
        refObj[count]=currentNode;
        currentNode=currentNode.next;
        count++
    }
    if(count-n-1<0){
        head=head.next;
        return head;
    }
    if(refObj[count-n-1].next){
        refObj[count-n-1].next=refObj[count-n-1].next.next;
    }else{
        refObj[count-n-1]=null;
    }
    return head;
};




removeNthFromEnd([1,2],1)
