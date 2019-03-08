//
//  GlobalRCTRootView.h
//  React-iOS
//
//  Created by 许一宁 on 2019/3/7.
//  Copyright © 2019 许一宁. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <RCTRootView.h>
NS_ASSUME_NONNULL_BEGIN

@interface GlobalRCTRootView : NSObject

+(instancetype)sharedRCTRootView;

@property (strong ,nonatomic) RCTRootView * rootView;

@end

NS_ASSUME_NONNULL_END
