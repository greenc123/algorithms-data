/*
 Given a collection of intervals,
 merge all overlapping intervals. 

1) Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]

Explanation: Looking at the first two intervals 
- [1,3] and [2,6],
since they overlap, they are merged as [1,6].

2) Input: [[1,4],[4,5]]
Output: [[1,5]]

Explanation: Intervals [1,4] and [4,5] are
considerred overlapping. */

function merge(intervals) {
  let result = []
  
  intervals.sort((i1, i2) => i1[0] > i2[0] ? 1 : -1);

  if (intervals.length) {
    result.push(intervals[0])
  }

  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i]

    let last = result.pop();

    if (interval[0] > last[1]) {
      result.push(last)
      result.push(interval);	    
    }  else if (last[1] < interval[1]) {
      last[1] = interval[1]
      result.push(last)	    
    }	   
  }
  return result
}

console.log(merge([[1,3],[2,6], [8,10], [15, 18]]))
console.log([[1,6],[8,10],[15,18]] ,'solution')
console.log(merge([[1,4],[4,5]]), [[1,5]])

/*
A brute force approach is to iterate starting from
the first interval and compare it with all other intervals
to see if there is interval overlap.

If there is overlap, remove the other interval from the array
and merge it into the first interval. 


The same steps are repeated for remaining intervals.

In this implementation, the time complexity is O(n^2).

There is a more efficient approach, which is to sort
the intervals first based on their starting time.

After sorting, initialize a new array, call it result
by pushing the first interval into it.

Then iterate the remaining interval and do the following:

1) If the current interval does not overlap with the
most recent interval in the result array, push it to
the result array.

2) If the current interval overlaps with the most recent
interval in the result array and the ending time of
current interval is more than the most recent interval,
update the most recent interval ending time with the ending
time of current interval.

At the end of the traversal the result array will have
all the merged intervals.*/