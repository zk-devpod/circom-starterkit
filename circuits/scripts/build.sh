#!/bin/bash


cd 'sudoku/'
echo $PWD

sh executeGroth16.sh

echo "circuit executed"
echo "Listing files below:"
echo "=========================================================================================================================================="
ls
echo $PWD

# now start removing files