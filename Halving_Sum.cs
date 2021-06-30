using System;

namespace SumNumber
{
    class Sum
    {
    public static int Sum(int number) 
    {
        var n = number;
        var sum = 0;
        while (n > 1)
        {
            sum +=  Math.Ceiling(n / 2);
            n = sum;
        }

        return sum;
    }
    }
} 
