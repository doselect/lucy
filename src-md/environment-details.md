# Scripting environment details

Memory: 512MB

| Language    | Version                            | Timelimit (in seconds) | Libraries                                                                          |
| ----------  | ---------------------------------- | ---------------------- | ---------------------------------------------------------------------------------- |
| C           | gcc 4.8.4                          | 2                      | Jansson                                                                            |
| C++         | g++ 4.8.4, C++11 standard          | 2                      | jsoncpp, Boost.Regex                                                               |
| C++14       | g++ 4.8.4, C++14 standard          | 2                      | jsoncpp, Boost.Regex                                                               |
| Python 2    | 2.7.13                             | 10                     | requests, simplejson, numpy, scipy, scikit-learn, matplotlib, cython, pandas, nltk |
| Python 3    | 3.4.3                              | 10                     | requests, simplejson, numpy, scipy, scikit-learn, matplotlib, cython, pandas, nltk |
| Go          | 1.5.3                              | 4                      |                                                                                    |
| Java 7      | 1.7.0_80                           | 10                     | json-simple                                                                        |
| Java 8      | 1.8.0_131                          | 10                     | json-simple                                                                        |
| Julia       | 0.5.0                              | 4                      |                                                                                    |
| PHP         | 5.5.9                              | 9                      |                                                                                    |
| Ruby        | 2.4.1                              | 10                     |                                                                                    |
| Perl        | 5.18.2                             | 9                      |                                                                                    |
| Scala       | 2.11.4                             | 7                      |                                                                                    |
| Clojure     | 1.6.0                              | 8                      |                                                                                    |
| JavaScript  | Node.js 8.1.4                      | 10                     |                                                                                    |
| R           | 3.3.2                              | 10                     | RCurl, dplyr, tidyr, readr, stringr, plyr, reshape2, lubridate, data.table, dtplyr, foreach, ggplot2, RColorBrewer, randomForest, rpart, ROCR, car, party, caret, mlr, tree, klaR, ipred, lars, penalized |
| Haskell     | 7.6.3                              | 5                      |                                                                                    |
| Lua         | 5.2                                | 12                     |                                                                                    |
| CommonLisp  | GNU CLISP 2.49                     | 12                     |                                                                                    |
| BASH        | 4.3.11                             | 4                      |                                                                                    |
| Swift       | 3.0.2                              | 5                      |                                                                                    |
| Objective-C |	Clang 3.4                          | 2                      |                                                                                    |
| Rust        | 1.5.0                              | 5                      |                                                                                    |
| C#          | Mono Compiler 4.2.1                | 5                      |                                                                                    |
| F#          | F# Compiler for F# 4.0, Mono 4.2.1 | 5                      |                                                                                    |

# Actions

| Option   | Description                                                                                              |
| -------- | -------------------------------------------------------------------------------------------------------- |
| RUN CODE | Run your code against custom input                                                                       |
| VERIFY   | Verify your solution against sample testcase(s)                                                          |
| SUBMIT   | Your solution is judged against all the testcases. Sample testcase is also included but it's score is 0. |

# Status codes

| Status code | Description |
| ----------- | ----------- |
| AC          | It means that your code ran without any issues during the "RUN CODE"                                         |
| NZEC        | Runtime Error. This can be caused due to various reasons like improper handling of input, segmentation fault, etc. And if you forgot to return 0 in main function for C or C++ |
| TLE         | Time Limit Exceeded. This status is shown if your program was not able to exit within the assigned timelimit |
| CE          | Compilation Error                                                                                            |
| CTLE        | Compilation Time Limit Exceeded. This occurs if your code takes too much time to compile. Note that if you feel this status occured incorrectly, please try re-submitting your code |
| AC/OK       | Accepted. This status is shown if your solution gets accepted for a particular testcase                      |
| NC          | Not Correct. This status is shown if your solution fails for a particular testcase                           |

# FAQ

## My solution passes the sample testcase but when i submit my code, i'm getting the status code NZEC for all testcases and no error log
The final testcases are often more complex than the sample testcase, therefore make sure your code has handled all possible inputs. Some of the reasons for NZEC are improper handling of inputs, segmentation fault, etc. The error logs are only shown for "RUN CODE" and "VERIFY".

## My java solution runs locally but gives error when i run it on the DoSelect platform
Make sure your class name is `Source` unless the class name is explicitly specified in the problem description.
