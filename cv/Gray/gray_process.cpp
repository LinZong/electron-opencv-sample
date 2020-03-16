#include "gray_process.h"
#include <opencv2/opencv.hpp>
#include <opencv2/imgproc/imgproc.hpp>

extern "C" void do_gray(char * src, char * dst)
{
    cv::Mat img = cv::imread(src);//It returns a matrix object
    cv::Mat graymat;
    cv::cvtColor(img,graymat,cv::COLOR_BGR2GRAY);
    cv::imwrite(dst,graymat);
}