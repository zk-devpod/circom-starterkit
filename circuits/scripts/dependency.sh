#!/bin/bash

# install rust
# curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh

# install wget for mac
# brew install wget

# clone circom and move to the folder
git clone https://github.com/iden3/circom.git
cd circom

# build the compiler.
cargo build --release

# install cargo in path.
cargo install --path circom

# see if circom is working
circom --help

# remove the circom folder
rm -rf circom





