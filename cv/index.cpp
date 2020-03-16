#include "Gray/gray_process.h"
#include <node.h>
#include <stdio.h>

namespace demo
{

using v8::FunctionCallbackInfo;
using v8::Int32;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;
using v8::Boolean;

const char* ToCString(const String::Utf8Value& value) {
  return *value ? *value : "<string conversion failed>";
}

void GrayImage(const FunctionCallbackInfo<Value> &args)
{
    Isolate *isolate = args.GetIsolate();
    if(args.Length() < 2) {
      args.GetReturnValue().Set(Boolean::New(isolate,false));
      return;
    }
    String::Utf8Value src(isolate, args[0]);
    String::Utf8Value dst(isolate, args[1]);
    const char* src_c = ToCString(src);
    const char* dst_c = ToCString(dst);
    
    do_gray((char*)src_c,(char*)dst_c);
    args.GetReturnValue().Set(Boolean::New(isolate,true));
}

void init(Local<Object> exports)
{
  NODE_SET_METHOD(exports, "GrayImage", GrayImage);
}

  NODE_MODULE(opencv_gray, init)

}