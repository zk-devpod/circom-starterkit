#!/bin/bash

# update the updated files in smart contract and ui for testing & verification

echo $PWD

# copy the files to the public folder in the UI

# Create the zkproof folder inside the ui's public folder if it does not exist
mkdir -p ../zksudoku-ui/public/zkproof

# Copy the wasm file to ui
cp sudoku/sudoku_js/sudoku.wasm ../zksudoku-ui/public/zkproof

# Copy the final zkey to ui
cp sudoku/sudoku_final.zkey ../zksudoku-ui/public/zkproof



# copy the contracts and contract files in contracts folder.

# Copy the verifier contract generated to contracts
cp sudoku/sudokuVerifier.sol ../contracts/contracts

# Create the zkproof in contracts folder if it does not exist
mkdir -p ../contracts/test/zkproof

# Copy the wasm file to test smart contracts
cp sudoku/sudoku_js/sudoku.wasm ../contracts/test/zkproof

# Copy the final zkey file to test smart contracts
cp sudoku/sudoku_final.zkey ../contracts/test/zkproof