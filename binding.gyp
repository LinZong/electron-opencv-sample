{
  "targets": [
    {
      "target_name": "opencv_gray",
      "sources": [ "cv/index.cpp" ],
      "cflags": [ "-std=c++11" ],
      "ldflags": [
        '-Wl,-rpath,<(module_root_dir)/cv/Gray/',
      ],
      "libraries": [
        "<(module_root_dir)/cv/Gray/libgrayimage.so"
      ]
    }
  ]
}