# Carbon-Caculator
数据结构大作业

## 核心思想
通过数据库，记录各项活动的碳排放，随后根据用户输入计算展示

## 前端
交互界面，将用户输入的各项活动的名称和参数传递给后端
### 技术栈
1. vue3
2. axios
3. element-plus
4. TypeScript

## 后端
接受前端传递的活动名称和参数，通过数据库查询和数据计算，将碳排放结果返回给前端

### 技术栈
1. 列出哈希表，哈希表存入数据库
2. http服务器框架 exprss
3. 数据库 openEular 
4. 登录
5. 个人存储每一次

## API

洗衣液 f(洗衣液)（xiyiye） hashvalue

JSON
{
	"洗衣液"：14(单位统一千克)
}

API参数（name = xiyiye,  number = 2）
fetch(url,{
	param:{
		name = xiyiye,
		number = 2
	}
})

## 步骤
1. 从网上扒计算公式（word存储）
	{
		”xiyiye“:   25.7
		"chunmianTxv" : 7.0
	}
1. 确定哈希函数
2. 前端开始写页面
3. 后端开始创建数据库，写API

还有时间
1. 登录功能
2. 历史查询


