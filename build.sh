#!/bin/bash

cd cv && cmake . && make && cd ..

HOME=~/.electron-gyp node-gyp rebuild --target=8.1.1 --arch=x64 --dist-url=https://electronjs.org/headers

