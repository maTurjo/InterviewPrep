using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace LinkedList_Basic
{
    internal class Program
    {
        static void Main(string[] args)
        {
            LinkedList list=new LinkedList();

            for(int i = 0; i < 5; i++) list.addToFront(i);

            list.reverseList();

            /*list.addInTheMiddle(25, 5);*/
            list.deleteNodeByIndex(0);
            list.printLinkedList();

            Console.ReadLine();

        }

        public class Node
        {
            public int value;
            public Node nextNode = null;

            public Node(int data)
            {
                value = data;
            }
        }

        public class LinkedList
        {
            public Node head = null;
            public int count = 0;


            public void deleteNodeByIndex(int index)
            {
                Node runner = head;
                int i = 0;
                if (index == 0)
                {
                    head = head.nextNode;
                    return;
                }
                while(runner != null)
                {
                    
                    if (i == index-1)
                    {
                        if (runner.nextNode == null) break;
                        runner.nextNode = runner.nextNode.nextNode;
                        return;
                        //delete Node
                    }
                    runner = runner.nextNode;
                    i++;
                }
               Console.WriteLine($"Invalid Index Given");
               return;
            }
            public void addToFront(int data)
            {
                if (head == null) head = new Node(data);
                else
                {
                    Node newNode = new Node(data);
                    newNode.nextNode = head;
                    head = newNode;
                }

                count++;
            }

            public void reverseList()
            {
                if (head == null) return;

                Node previousNode=null;
                Node CurrentNode=head;
                Node NextNode=null;

                while (CurrentNode != null)
                {
                    NextNode = CurrentNode.nextNode;
                    CurrentNode.nextNode = previousNode;
                    
                    previousNode = CurrentNode;
                    CurrentNode = NextNode;
                }
                head = previousNode;
                

            }


            public void printRecursively(Node head)
            {
                if (head == null) return;
                Console.WriteLine($"{head.value}");
                printRecursively(head.nextNode);

            }

            public void printLinkedList()
            {
                Node runner = head;
                if (head == null) Console.WriteLine("Linked List is empty");
                else
                {
                    while (runner != null)
                    {

                        Console.WriteLine($"{runner.value}");
                        runner = runner.nextNode;
                    }

                }
            }

            public void addInTheMiddle(int value,int index)
            {
                Node runner=head;
                Node newNode = new Node(value);
                int i = 0;
                if (index == 0)
                {
                    newNode.nextNode = head;
                    head = newNode;
                    return;
                }
                while (runner != null)
                {
                    if (i == index-1)
                    {
                        Node restOfTheList = runner.nextNode;
                        runner.nextNode = newNode;
                        newNode.nextNode = restOfTheList;
                        return;
                    }
                    i++;
                    runner= runner.nextNode;
                    if (runner == null)
                    {
                        Console.WriteLine("Invalid index given");
                        return;
                    }
                }
            }
        }
    }
}
