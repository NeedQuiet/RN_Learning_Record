//
//  OpenNativeModule.m
//  React-iOS
//
//  Created by 许一宁 on 2019/3/6.
//  Copyright © 2019 许一宁. All rights reserved.
//

#import "OpenNativeModule.h"
#import "AppDelegate.h"

@implementation OpenNativeModule
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(popToRootViewController) {
    dispatch_async(dispatch_get_main_queue(), ^{
        AppDelegate *delegate = (AppDelegate *)([UIApplication sharedApplication].delegate);
        [delegate.navigationController popToRootViewControllerAnimated:YES];
    });
}

RCT_EXPORT_METHOD(rightNavItem:(NSString *)state callback:(RCTResponseSenderBlock)callback) {
    dispatch_async(dispatch_get_main_queue(), ^{
        NSLog(@"rightNavItem : %@",state);
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(1 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
            callback(@[@"右侧按钮点击已收到"]);
        });
    });
}

@end
