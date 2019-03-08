//
//  ViewController.m
//  React-iOS
//
//  Created by 许一宁 on 2019/3/5.
//  Copyright © 2019 许一宁. All rights reserved.
//

#import "ViewController.h"
#import "NativeViewController.h"
#import "NativeToRNEventEmitter.h"
@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    self.view.backgroundColor = [UIColor grayColor];
    
    UIButton * btn = [[UIButton alloc]initWithFrame:CGRectMake(0, 0, 200, 50)];
    btn.center = CGPointMake([UIScreen mainScreen].bounds.size.width / 2, 150);
    btn.backgroundColor = [UIColor blueColor];
    [btn setTitle:@"下一页" forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(cleak) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:btn];
    
    UIButton *button = [[UIButton alloc] initWithFrame:CGRectMake(0, 0, 300, 80)];
    [button setTitle:@"向首页发通知" forState:UIControlStateNormal];
    button.center = CGPointMake([UIScreen mainScreen].bounds.size.width / 2, 350);
    [button setTitleColor:[UIColor redColor] forState:UIControlStateNormal];
    [button addTarget:self action:@selector(pushNoticationToHome) forControlEvents:UIControlEventTouchUpInside];
    
    [self.view addSubview:button];
}

- (void)pushNoticationToHome {
    //发通知传值
    [NativeToRNEventEmitter shareInstance];
    [[NSNotificationCenter defaultCenter] postNotificationName:@"CustomEventNameNotifation" object:nil];
}

- (void)cleak{
    NativeViewController * vc = [[NativeViewController alloc]init];
    [self.navigationController pushViewController:vc animated:YES];
}

- (void)viewWillAppear:(BOOL)animated{
    [super viewWillAppear:animated];
    self.navigationController.navigationBarHidden = NO;
}

@end
