//
//  NativeViewController.m
//  React-iOS
//
//  Created by 许一宁 on 2019/3/6.
//  Copyright © 2019 许一宁. All rights reserved.
//

#import "NativeViewController.h"
#import <RCTRootView.h>
#import <React/RCTBundleURLProvider.h>
#import "GlobalRCTRootView.h"
@interface NativeViewController ()

@end

@implementation NativeViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.


    self.view = [GlobalRCTRootView sharedRCTRootView].rootView;
//    [self everyTime];
}

- (void)everyTime{
    NSURL *jsCodeLocation;
#if DEBUG
    //        jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios&dev=true"];
    jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.js" fallbackResource:nil];
#else
    jsCodeLocation = [NSURL URLWithString:[[NSBundle mainBundle] pathForResource:@"main.jsbundle" ofType:nil]];;
#endif
    
    
    RCTRootView * rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                         moduleName:@"iMuzoReactNative"
                                                  initialProperties:nil
                                                      launchOptions:nil];
    self.view = rootView;
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    self.navigationController.navigationBar.hidden = YES;
}

- (void)viewWillDisappear:(BOOL)animated {
    [super viewWillDisappear:animated];
    self.navigationController.navigationBar.hidden = NO;
}

@end
