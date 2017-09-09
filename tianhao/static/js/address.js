		var app = angular.module('lesson',[]);
		app.controller('lesson13',function($scope){
			//确认商品信息
			$scope.productList = [
				{
					orderId : 'GH2017081410001',
					productName : '贝康诺TM孕前夫妇基因筛检(大众套餐)',
					logo : '../img/product-1.jpg',
					productPrice: 2400,
					buyAmount : 1,
					totalMoney : 2400,
					createTime : '2017-08-10 16:41'
					
				},
				{
					orderId : 'GH2017081410002',
					"productName":"贝康诺TM孕前夫妇地中海贫血基因筛检",
					logo : '../img/product-3.jpg',
					productPrice: 180,
					buyAmount : 2,
					totalMoney : 360,
					createTime : '2017-08-10 16:41'
					
				}
			];
			//填写并确认收货信息
			$scope.step1IsOk = false;
			$scope.step1Cur = 1;
			$scope.trueName = '';
			$scope.mobile = "";
			$scope.QQ = '';
			$scope.address = '';
			$scope.needInvoice = false;
			$scope.invoiceTitle = '';
			
			$scope.confirmStep1 = function(){
				$scope.step1IsOk = true;
				$scope.step1Cur = 0;
				$scope.step2Cur = 1;
			}
			
			
			//选择并确认支付类型
			$scope.paymentList = [
				{
					ID : 1,
					Code : 'A3110',
					Type : 1,//网银
					Title : '中国工商银行',
					selected : false
				},
				{
					ID : 2,
					Code : 'A3111',
					Type : 1,//网银
					Title : '招商银行',
					selected : false
				},
				{
					ID : 3,
					Code : 'A3112',
					Type : 1,//网银
					Title : '中国农业银行',
					selected : false
				},
				{
					ID : 4,
					Code : 'A3113',
					Type : 1,//网银
					Title : '交通银行',
					selected : false
				},
				{
					ID : 5,
					Code : 'A3114',
					Type : 1,//网银
					Title : '中国建设银行',
					selected : false
				},
				{
					ID : 6,
					Code : 'B2110',
					Type : 2,//支付平台
					Title : '微信支付',
					selected : false
				},
				{
					ID : 7,
					Code : 'B2111',
					Type : 2,//支付平台
					Title : '支付宝',
					selected : false
				}
			];
			
			$scope.step2IsOk = false;
			$scope.paymentType = 1;
			$scope.changePaymentType = function(type){
				$scope.paymentType = type;
			};
			$scope.filterByType = function(payment){
				if(payment.Type == $scope.paymentType){
					return payment;
				}
			}
			
			$scope.selectPayment = {};
			$scope.confirmStep2 = function(){
				for(var i in $scope.paymentList){
					if($scope.paymentList[i].selected){
						$scope.selectPayment = $scope.paymentList[i];
					}
				}
				$scope.step2IsOk = true;
				$scope.step2Cur = 0;
				$scope.step3Cur = 1;
			}
			
			//提交订单
			$scope.checkOut = function(){
				var order = {
					product : $scope.orderProductList,
					accountInfo : {
						trueName : $scope.trueName,
						mobile : $scope.mobile,
						QQ : $scope.QQ,
						address : $scope.address,
						needInvoice : $scope.needInvoice,
						invoiceTitle : $scope.invoiceTitle
					},
					payment : $scope.selectPayment
				};
				console.log(order);
			}
			
			
			
			
			
			
			
		});