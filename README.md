# Sorting-Techniques


**Insertion Sort**

Insertion Sort is another stable algorithm that sports average and worst case time complexities of *O(n²)* and a best case of *O(n)* when the array is largely pre-sorted. Insertion Sort’s ability to quickly sort individual inputs makes it uniquely useful when working with live or streaming data.

**How it works**

Similar to Bubble Sort, Insertion sort is also driven by a nested loop. The current value of the outer loop is compared to it’s preceding element through an inner loop. If the outer loop value is higher than the preceding element, the preceding element moves up one index space and the inner loop compares the outer loop value to the next preceding element. If the outer loop value is the larger value in the comparison, the outer loop value takes the index space to the right of the smaller element.
