# Sorting-Techniques

Sorting data is one of the most common tasks in computer programming. A quick internet search shows more than 40 sorting algorithms have been created by engineers. This article will focus on three of the simplest: Bubble, Insertion, and Selection. Although none of the three are commonly used due to inferior run time performance, there are edge cases where they prove superior. In addition, they serve as building blocks for the more efficient and more complex algorithms like Merge Sort, Quick Sort, and Radix Sort.

![alt text][logo]

[logo]: https://github.com/gyanprakash0221/Sorting-Techniques/blob/main/sorting%20algorithms.png "sorting"

![alt text][logo]

[logo]: https://github.com/gyanprakash0221/Sorting-Techniques/blob/main/common%20ds%26algo%20operations.png

Before diving in, make sure you are familiar with Big-O notation. There are also two sorting-specific terms worth understanding, which are defined below.

**Key Term Definitions**

*Stability*: Stable sorting maintains the relative order of elements with equal values. For example, implementing stable sorts on a list of potential clients by company name and then geographic location would result in an alphabetical list of companies sorted by location.

*Adaptability*: Sorting algorithms whose running time improves the more pre-sorted the list is.

**Bubble Sort**

Bubble sort dates back to 1956. It is not commonly used due average and worst case time complexities of O(n²). However, the method is adaptive and will exhibit an O(n) run time for lists that are largely pre-sorted.

**How it works**

Bubble sort is driven by a nested loop where the largest values bubble to the top. The outer loop starts at one end of the array. Its purpose is to ensure the inner loop repeats n times where n is the number of elements in the array.

The inner loop starts at the first element of the array and compares each element to the following. If the first element is larger than the next, the two elements are swapped. If not, the elements stay in their position. Either way the loop will move forward to compare the next pair of elements.

Bubble Sort’s adaptability is based on breaking out of the outer loop if the inner loop is completed without executing a swap (see lines 3, 7, and 10 in the code snippet below).


**Insertion Sort**

Insertion Sort is another stable algorithm that sports average and worst case time complexities of *O(n²)* and a best case of *O(n)* when the array is largely pre-sorted. Insertion Sort’s ability to quickly sort individual inputs makes it uniquely useful when working with live or streaming data.

**How it works**

Similar to Bubble Sort, Insertion sort is also driven by a nested loop. The current value of the outer loop is compared to it’s preceding element through an inner loop. If the outer loop value is higher than the preceding element, the preceding element moves up one index space and the inner loop compares the outer loop value to the next preceding element. If the outer loop value is the larger value in the comparison, the outer loop value takes the index space to the right of the smaller element.

**Selection Sort**

Selection Sort is unstable and non-adaptive with best, average and worst case time complexities are O(n²). However, because the algorithm completes fewer writes than others, there are edge cases on small data sets where it can prove effective.

**How it works**

In Selection Sort, the inner loop checks each element of the array starting from index 0 and makes a note of the smallest value it has come across. Once the loop iteration ends, the smallest value is swapped with the element where the loop started and the starting point for the next inner loop iteration is incremented by one.
