//
//  GlobalRCTRootView.m
//  React-iOS
//
//  Created by 许一宁 on 2019/3/7.
//  Copyright © 2019 许一宁. All rights reserved.
//

#import "GlobalRCTRootView.h"
#import <RCTRootView.h>
#import <React/RCTBundleURLProvider.h>

@implementation GlobalRCTRootView

+ (instancetype)sharedRCTRootView{
    static id sharedInstance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [[GlobalRCTRootView alloc]init];
    });
    
    return sharedInstance;
}

- (instancetype)init
{
    self = [super init];
    if (self) {
        NSURL *jsCodeLocation;
#if DEBUG
//        jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios&dev=true"];
        jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.js" fallbackResource:nil];
#else
        jsCodeLocation = [NSURL URLWithString:[[NSBundle mainBundle] pathForResource:@"main.jsbundle" ofType:nil]];;
#endif
        
        self.rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                               moduleName:@"iMuzoReactNative"
                                        initialProperties:nil
                                            launchOptions:nil];
    }
    return self;
}

@end
