let main = new Vue({
	el: "#main",
	components: {},
	data: {
		totalLists: [
			{
				"date": "111 / 07 / 14",
				"number": 1110400001,
				"application": "林○○",
				"update": "審核通過",
				"Payment": "已繳費",
				"set": [
					{ status: "下載副本圖", number: 1 }
				]
			},
			{
				"date": "111 / 07 / 13",
				"number": 1110400002,
				"application": "張○○",
				"update": "審核中",
				"Payment": "未繳費",
				"set": [
					{ status: "上傳補件", number: 2 }
				]
			},
			{
				"date": "111 / 07 / 12",
				"number": 1110400005,
				"application": "陳○○",
				"update": "待補件",
				"Payment": "未繳費",
				// "set": [
				// 	{ status: "下載上傳成功憑證", number: 3 }。
				// ]
			},
			{
				"date": "111 / 07 / 10",
				"number": 1110400004,
				"application": "王○○",
				"update": "審核中",
				"Payment": "未繳費"

			},
			{
				"date": "111 / 07 / 08",
				"number": 1110400007,
				"application": "朱○○",
				"update": "審核中",
				"Payment": "未繳費"
			},
			{
				"date": "111 / 07 / 07",
				"number": 1110400012,
				"application": "魏○○",
				"update": "待補件",
				"Payment": "未繳費"
			},
			{
				"date": "111 / 07 / 05",
				"number": 1110400015,
				"application": "羅○○",
				"update": "退件",
				"Payment": "未繳費"
			},
			{
				"date": "111 / 07 / 04",
				"number": 1110300007,
				"application": "江○○",
				"update": "審核中",
				"Payment": "未繳費"
			},
			{
				"date": "111 / 07 / 03",
				"number": 1110300012,
				"application": "顏○○",
				"update": "待補件",
				"Payment": "未繳費"
			},
			{
				"date": "111 / 07 / 01",
				"number": 1110300015,
				"application": "嚴○○",
				"update": "退件",
				"Payment": "未繳費"
			},
		],
		landLists: [{
			"申請人": [
				{ title: "姓名", content: "陳小姐" },
				{ title: "聯絡電話", content: "03-9999999" },
				{ title: "地址", content: "新竹市香山區中華路五段125巷520號" },
			],
			"建築師事務所": [
				{ title: "名稱", content: "陳小明建築師事務所" },
				{ title: "聯絡電話", content: "03-6201234" },
				{ title: "建築師姓名", content: "陳小明" },
				{ title: "證書字號", content: "建開證字第1000號" },
				{ title: "地址", content: "新竹市香山區中華路五段125巷520號" },

			],
			"代辦業者": [
				{ title: "姓名", content: "彭小宏" },
				{ title: "聯絡電話", content: "03-9999999" },
				{ title: "地址", content: "新竹市北區竹光路260號" },
			],
			"申請事由或其他": [
				{ title: "基地地點", content: "新竹市北區中正路" },
				{ title: "申請事由", content: "法定空地分割" }
			],
		}
			// 	{ number: "03 - 9999999 " },
			// 	{ title: "申請人姓名", content: "陳小姐" },
			// { title: "申請人聯絡電話", content: "03-9999999" },
			// { title: "申請人地址", content: "新竹市香山區中華路五段125巷520號" },
			// { title: "建築師姓名", content: "陳小明" },
			// { title: "建築師事務所", content: "陳小明建築師事務所" },
			// { title: "建築師事務所聯絡電話", content: "03-6201234" },
			// { title: "建築師事務所地址", content: "新竹市香山區中華路五段125巷520號" },
			// { title: "開業證書等級字號", content: "建開證字第1000號" },
			// { title: "代辦業者姓名", content: "彭小宏" },
			// { title: "代辦業者聯絡電話", content: "03-9999999" },
			// { title: "代辦業者地址", content: "新竹市北區竹光路260號" },
			// 	{ title: "基地地點", content: "新竹市北區中正路" },
			// { title: "申請事由", content: "申請建照" },
		],
		applyLand: [
			{ title: "中山段一小段", content: "00010000(部分)" },
			{ title: "中山段一小段", content: "00030000" },
			{ title: "中山段一小段", content: "00050000(部分)" },
			{ title: "中山段一小段", content: "00070000" },],
		sectList: [{ "resultCode": "0000", "resultMsg": "查詢成功", "DATA": [{ "SECTNAME": "力行段", "CODE": "0154" }, { "SECTNAME": "十塊寮段蟹仔埔小段", "CODE": "0061" }, { "SECTNAME": "三姓段", "CODE": "0085" }, { "SECTNAME": "千甲段", "CODE": "0130" }, { "SECTNAME": "士林段", "CODE": "0180" }, { "SECTNAME": "大庄段", "CODE": "0096" }, { "SECTNAME": "大湖段", "CODE": "0165" }, { "SECTNAME": "大學段", "CODE": "0141" }, { "SECTNAME": "中山段一小段", "CODE": "0047" }, { "SECTNAME": "中山段二小段", "CODE": "0048" }, { "SECTNAME": "中山段三小段", "CODE": "0049" }, { "SECTNAME": "中央段", "CODE": "0009" }, { "SECTNAME": "中華段", "CODE": "0016" }, { "SECTNAME": "中雅段", "CODE": "0044" }, { "SECTNAME": "中隘段", "CODE": "0159" }, { "SECTNAME": "中寮段", "CODE": "0115" }, { "SECTNAME": "中興段", "CODE": "0084" }, { "SECTNAME": "五福段", "CODE": "0170" }, { "SECTNAME": "仁愛段", "CODE": "0080" }, { "SECTNAME": "介壽段", "CODE": "0139" }, { "SECTNAME": "內湖段", "CODE": "0158" }, { "SECTNAME": "水源段", "CODE": "0132" }, { "SECTNAME": "仙水段", "CODE": "0140" }, { "SECTNAME": "仙宮段", "CODE": "0142" }, { "SECTNAME": "北門段", "CODE": "0046" }, { "SECTNAME": "古峰段", "CODE": "0145" }, { "SECTNAME": "古賢段", "CODE": "0121" }, { "SECTNAME": "台肥段", "CODE": "0178" }, { "SECTNAME": "民主段", "CODE": "0012" }, { "SECTNAME": "民主段一小段", "CODE": "0092" }, { "SECTNAME": "民富段", "CODE": "0050" }, { "SECTNAME": "光武段", "CODE": "0090" }, { "SECTNAME": "光復段", "CODE": "0018" }, { "SECTNAME": "光華段", "CODE": "0011" }, { "SECTNAME": "光鎮段", "CODE": "0104" }, { "SECTNAME": "成功段", "CODE": "0019" }, { "SECTNAME": "成德段", "CODE": "0107" }, { "SECTNAME": "曲溪段", "CODE": "0106" }, { "SECTNAME": "竹港段", "CODE": "0111" }, { "SECTNAME": "竹蓮段", "CODE": "0037" }, { "SECTNAME": "自由段", "CODE": "0055" }, { "SECTNAME": "西門段一小段", "CODE": "0040" }, { "SECTNAME": "西門段二小段", "CODE": "0041" }, { "SECTNAME": "西門段三小段", "CODE": "0042" }, { "SECTNAME": "西濱段", "CODE": "0116" }, { "SECTNAME": "育賢段", "CODE": "0103" }, { "SECTNAME": "見樂段", "CODE": "0160" }, { "SECTNAME": "和平段", "CODE": "0082" }, { "SECTNAME": "延壽段", "CODE": "0164" }, { "SECTNAME": "忠孝段", "CODE": "0079" }, { "SECTNAME": "明湖段", "CODE": "0149" }, { "SECTNAME": "東山段一小段", "CODE": "0013" }, { "SECTNAME": "東山段二小段", "CODE": "0014" }, { "SECTNAME": "東光段", "CODE": "0015" }, { "SECTNAME": "東明段", "CODE": "0017" }, { "SECTNAME": "東門段一小段", "CODE": "0001" }, { "SECTNAME": "東門段二小段", "CODE": "0002" }, { "SECTNAME": "東門段三小段", "CODE": "0003" }, { "SECTNAME": "東香段", "CODE": "0151" }, { "SECTNAME": "東橋段", "CODE": "0138" }, { "SECTNAME": "東濱段", "CODE": "0119" }, { "SECTNAME": "武陵段", "CODE": "0052" }, { "SECTNAME": "虎山段", "CODE": "0128" }, { "SECTNAME": "虎林段", "CODE": "0127" }, { "SECTNAME": "金山段", "CODE": "0135" }, { "SECTNAME": "金雅段", "CODE": "0179" }, { "SECTNAME": "長春段", "CODE": "0088" }, { "SECTNAME": "長興段", "CODE": "0168" }, { "SECTNAME": "青山段", "CODE": "0167" }, { "SECTNAME": "信義段", "CODE": "0081" }, { "SECTNAME": "前溪段", "CODE": "0134" }, { "SECTNAME": "南門段一小段", "CODE": "0033" }, { "SECTNAME": "南門段二小段", "CODE": "0034" }, { "SECTNAME": "南門段三小段", "CODE": "0035" }, { "SECTNAME": "南門段四小段", "CODE": "0036" }, { "SECTNAME": "南港段", "CODE": "0173" }, { "SECTNAME": "南湖段", "CODE": "0147" }, { "SECTNAME": "南華段", "CODE": "0129" }, { "SECTNAME": "南勢段", "CODE": "0177" }, { "SECTNAME": "南寮段", "CODE": "0114" }, { "SECTNAME": "南興段", "CODE": "0157" }, { "SECTNAME": "建華段", "CODE": "0102" }, { "SECTNAME": "柑林段", "CODE": "0152" }, { "SECTNAME": "科技段", "CODE": "0175" }, { "SECTNAME": "科園段科園小段", "CODE": "0031" }, { "SECTNAME": "科園段龍山小段", "CODE": "0032" }, { "SECTNAME": "科學段一小段", "CODE": "0099" }, { "SECTNAME": "科學段二小段", "CODE": "0100" }, { "SECTNAME": "科學段三小段", "CODE": "0101" }, { "SECTNAME": "美山段", "CODE": "0097" }, { "SECTNAME": "美城段", "CODE": "0150" }, { "SECTNAME": "茄苳段", "CODE": "0163" }, { "SECTNAME": "風空段", "CODE": "0176" }, { "SECTNAME": "香中段", "CODE": "0094" }, { "SECTNAME": "香村段", "CODE": "0153" }, { "SECTNAME": "香美段", "CODE": "0095" }, { "SECTNAME": "香雅段", "CODE": "0162" }, { "SECTNAME": "香濱段", "CODE": "0093" }, { "SECTNAME": "唐高段", "CODE": "0083" }, { "SECTNAME": "師院段", "CODE": "0156" }, { "SECTNAME": "柴橋段", "CODE": "0105" }, { "SECTNAME": "海山段", "CODE": "0166" }, { "SECTNAME": "海埔段", "CODE": "0174" }, { "SECTNAME": "海濱段", "CODE": "0117" }, { "SECTNAME": "高峰段", "CODE": "0144" }, { "SECTNAME": "高翠段", "CODE": "0143" }, { "SECTNAME": "國道段", "CODE": "0091" }, { "SECTNAME": "崙子段", "CODE": "0051" }, { "SECTNAME": "康朗段", "CODE": "0110" }, { "SECTNAME": "康樂段", "CODE": "0113" }, { "SECTNAME": "富山段", "CODE": "0123" }, { "SECTNAME": "復中段", "CODE": "0010" }, { "SECTNAME": "復興段", "CODE": "0089" }, { "SECTNAME": "朝山段", "CODE": "0098" }, { "SECTNAME": "朝山段一小段", "CODE": "0109" }, { "SECTNAME": "港北段", "CODE": "0118" }, { "SECTNAME": "港南段", "CODE": "0124" }, { "SECTNAME": "湖港段", "CODE": "0172" }, { "SECTNAME": "華江段", "CODE": "0125" }, { "SECTNAME": "隆恩段", "CODE": "0131" }, { "SECTNAME": "雅溪段", "CODE": "0148" }, { "SECTNAME": "新航段", "CODE": "0126" }, { "SECTNAME": "新莊段", "CODE": "0086" }, { "SECTNAME": "新港段", "CODE": "0112" }, { "SECTNAME": "新雅段", "CODE": "0122" }, { "SECTNAME": "新興段", "CODE": "0038" }, { "SECTNAME": "新興段一小段", "CODE": "0108" }, { "SECTNAME": "溪橋段", "CODE": "0133" }, { "SECTNAME": "筧橋段", "CODE": "0120" }, { "SECTNAME": "榮光段一小段", "CODE": "0004" }, { "SECTNAME": "榮光段二小段", "CODE": "0005" }, { "SECTNAME": "榮光段三小段", "CODE": "0006" }, { "SECTNAME": "福林段", "CODE": "0053" }, { "SECTNAME": "翠湖段", "CODE": "0146" }, { "SECTNAME": "聚吉段", "CODE": "0043" }, { "SECTNAME": "樹下段", "CODE": "0161" }, { "SECTNAME": "親仁段一小段", "CODE": "0007" }, { "SECTNAME": "親仁段二小段", "CODE": "0008" }, { "SECTNAME": "舊社段", "CODE": "0056" }, { "SECTNAME": "醫專段", "CODE": "0155" }, { "SECTNAME": "關東段", "CODE": "0087" }, { "SECTNAME": "麗園段", "CODE": "0171" }, { "SECTNAME": "鹽水段", "CODE": "0169" }], "ErrorDATA": null }],
		memberList: [{ mail: "abc@gmail.com", name: "王○○", phoneNumber: "0912-123-123", address: "221新北市汐止區新台五路一段159號5樓" }],
		SendSearch: false,
		applyList: "",
		counter: 0,
		memberStatus: [],
		applyNum: [{ number: "府都建字第111400001號" }],
		applyReason: [{ value: "01", content: "申請建照執照" }, { value: "02", content: "畸零地合併證明" }, { value: "03", content: "法定空地分割" }, { value: "04", content: "其他" }],
		inputShow: false,
		upLoadList: [{
			description: [
				{ title: "案件編號", content: "府都建字第1110400001號" },
				{ title: "覆核次數", content: "第二次" },
				{ title: "審查意見參考", content: "審查意見.pdf" },],
			date: [
				{ title: "申請日期", content: "111/01/17" },
				{ title: "審查日期", content: "111/01/25" },
				{ title: "補件期限", content: "111/02/24 " },],
			reason: [
				{ title: "審核未通過原因", content: "申請書欄位不齊，建築線申請圖標示與圖示說明有誤，相關內容與實際狀況不符合，請先行勘誤。" }]
		}],
	},

	methods: {
		returnPage: function () {
			history.go(-1)
		},
		activeBtn: function () {
			function doUpdate() {
				sessionStorage.setItem("acc", "systemLogin");
				Swal.fire(
					'登入成功!',
					'歡迎使用本系統',
					'success'
				)
				window.setTimeout(function start() {
					location.replace("./apply.html");
				}, 1500)
			}
			doUpdate()
		},
		addApplyList: function () {
			let containerBox = document.querySelector(".containerBox")
			let NextStep = document.querySelector(".NextStep")
			let LastStep = document.querySelector(".LastStep")
			let tableHead = document.querySelector("#ApplyTH")
			tableHead.insertAdjacentHTML("afterend", `
									<tr class="ApplyTr">
										<td>01</td>
										<td>力行段</td>
										<td>1022200001</td>
										<td><input type="checkbox" name="" id="" checked></td>
										<td><button type="button" class="btn btn-danger trashCan">
											<i class="fa-solid fa-trash"></i></button></td>									
									</tr>`
			)
			active()
			function active() {
				let ApplyMap = document.querySelector(".ApplyMap")
				ApplyMap.style = "display:block";
				containerBox.style = "display:block";
				NextStep.style = "display:inline";
			}
			let counter = 0
			NextStep.addEventListener("click", function () {
				LastStep.style = "display:inline";
				counter++
			})
			LastStep.addEventListener("click", function () {
				counter--
				if (counter == 0) {
					LastStep.style = "display:none";
				}
			})
		},
		listDrop: function () {
			console.log("121211212");
			// let ApplyTr = document.querySelectorAll(".ApplyTr")
			// function getList() {
			// 	let trashCan = document.querySelectorAll(".trashCan")
			// 	console.log(trashCan);
			// 	trashCan.document.addEventListener("click", function (e) {
			// 		console.log(e);
			// 	})
			// }
			// getList()
		},
		NextPage: function (e) {
			this.counter = this.counter + 1;
			let page = this.counter;
			loginStep(page)
			function loginStep() {
				let formCard = document.querySelectorAll("form.loginPlate");
				let circle = document.querySelectorAll(".mdl-stepper-circle")
				let navTitle = document.querySelectorAll(".mdl-stepper-title")
				let changeIndex = document.querySelectorAll("a.changeIndex")

				formCard[page].style = "display:block";
				// 控制nav顏色宣告			
				circle[page].style = "background-color: yellow"
				navTitle[page].style = "color: yellow"
				for (let i = 0; i < formCard.length; i++) {
					if (i > 0) {
						e.target.parentElement.parentElement.children[0].style = "display:inline";
					}
					if (i != page) {
						formCard[i].style = "display:none";
					}
					if (page == formCard.length - 1) {
						e.target.parentElement.parentElement.remove();
						changeIndex[0].style = "display:inline";
					}
				}
			}
		},
		LastPage: function (e) {
			this.counter = this.counter - 1;
			let page = this.counter;
			let formCard = document.querySelectorAll("form.loginPlate");
			let circle = document.querySelectorAll(".mdl-stepper-circle")
			let navTitle = document.querySelectorAll(".mdl-stepper-title")
			formCard[page].style = "display:block";
			// 控制nav顏色宣告			
			circle[page].style = "background-color: yellow"
			navTitle[page].style = "color: yellow"
			for (let i = 0; i < formCard.length; i++) {
				if (i != page) {
					formCard[i].style = "display:none";
				}
				if (i == page + 1) {
					circle[i].style = "background-color: white"
					navTitle[i].style = "color: white"
				}
				if (page == 0) {
					e.target.parentElement.parentElement.children[page].style = "display:none"
				}
			}
		},
		applyGet: function (e) {
			this.counter = this.counter + 1;
			let page = this.counter;
			let divCard = document.querySelectorAll("div.card");
			let bigNum = document.querySelectorAll("p.bigNum");
			let cardText = document.querySelectorAll("p.card-text");
			let formFin = document.querySelectorAll(".loginStepThird");
			let step = document.querySelectorAll(".ApplyMain")
			getNum(page)
			function getNum() {
				for (let i = 0; i < divCard.length - 1; i++) {
					if (page == 4) {
						e.target.parentElement.parentElement.remove();
						formFin[0].style = "display:block"
						console.log(e.target.parentElement.parentElement);
					}
					if (page == 3) {
						e.target.innerText = "提交"
						// console.log(e.target.innerText);
					}
					if (i == page) {
						bigNum[page].style = "color:#0B4873 ;font-weight:bolder";
						cardText[page].style = "color:#0B4873;font-weight:bolder";
						divCard[page].style = "border-bottom: 2px solid #0B4873";
						step[i].style = "display:block"
					} else {
						bigNum[i].style = "color:#BEBEBE", "font-Weight:lighter";
						cardText[i].style = "color:#BEBEBE";
						divCard[i].style = "border-bottom: 2px solid #BEBEBE";
						step[i].style = "display:none"
						e.target.innerText = "下一步"
					}
				}
			}
		},
		applyLast: function (e) {
			this.counter = this.counter - 1;
			let page = this.counter;
			let divCard = document.querySelectorAll("div.card");
			let bigNum = document.querySelectorAll("p.bigNum");
			let cardText = document.querySelectorAll("p.card-text");
			let step = document.querySelectorAll(".ApplyMain")
			getNum(page)
			function getNum() {
				for (let i = 0; i < divCard.length - 1; i++) {
					if (i == page) {
						bigNum[page].style = "color:#0B4873 ;font-weight:bolder";
						cardText[page].style = "color:#0B4873;font-weight:bolder";
						divCard[page].style = "border-bottom: 2px solid #0B4873";
						step[i].style = "display:block"
						e.target.parentElement.parentElement.querySelectorAll(".NextStep")[0].innerText = "下一步"
					} else {
						bigNum[i].style = "color:#BEBEBE", "font-Weight:lighter";
						cardText[i].style = "color:#BEBEBE";
						divCard[i].style = "border-bottom: 2px solid #BEBEBE";
						step[i].style = "display:none"
					}
				}
			}
		},
		changeIndex: function () {
			changeIndex()
			function changeIndex() {
				sessionStorage.setItem("acc", "systemLogin");
				Swal.fire(
					'步驟完成!',
					'歡迎使用本系統',
					'success'
				)
				window.setTimeout(function start() {
					location.replace("./apply.html");
				}, 1500)

			}
		},
		loginPwdPage() {
			let memberCenter = document.querySelectorAll(".memberCenter");
			let loginPwdChange = document.querySelectorAll(".loginPwdChange");
			memberCenter[0].style = "display:none";
			loginPwdChange[0].style = "display:block";
		},

		loginPwdChange() {
			Swal.fire(
				'修改成功!',
				'請於下次登入時使用新的密碼',
				'success'
			)
			window.setTimeout(function start() {
				location.replace("./memberCenter.html");
			}, 1500)
		},
		MemberEdit() {
			let memberCenter = document.querySelectorAll(".memberCenter");
			let MemberEdit = document.querySelectorAll(".MemberEdit");
			memberCenter[0].style = "display:none";
			MemberEdit[0].style = "display:block";
		},
		MemberEditBtn() {
			Swal.fire(
				'修改成功!',
				'基本資料已修改完成',
				'success'
			)
			window.setTimeout(function start() {
				location.replace("./memberCenter.html");
			}, 1500)
		},
		// copyValue(e) {
		// 	let copyValue = e.target.parentElement.parentElement.querySelectorAll('.ApplyNum')[0].innerText;
		// 	// console.log(copyValue);
		// 	copy()
		// 	function copy() {
		// 		copyValue.document.execCommand('copy');
		// 		// console.log(e.target.parentElement.parentElement.querySelectorAll('.ApplyNum')[0].innerText);
		// 	}


		// 	// select('#btn').addEventListener('click', () => {
		// 	// 	navigator.clipboard.writeText(select('#text').value);
		// 	// })
		// 	// btnCopy.addEventListener('click', function () {
		// 	// 	
		// 	// });
		// },
		ddlReason() {
			let ddlObj = document.querySelector("#ddl_reason")
			let ddlObjValue = ddlObj.options[ddlObj.selectedIndex].value;
			if (ddlObjValue == 04) {
				this.inputShow = true;
			} else {
				this.inputShow = false;
			}
		},
		sendCheckMail() {
			changeIndex()
			function changeIndex() {
				Swal.fire(
					'註冊成功!',
					'註冊後請至電子信箱收信，並以預設密碼進行首次登入',
					'success'
				)
				window.setTimeout(function start() {
					location.replace("./login.html");
				}, 3500)
			}
		},
		btnTotalList(e) {
			// console.log(e.target.innerText);
			let divUpload = document.querySelectorAll("div.Upload");
			let formSearch = document.querySelectorAll("form.search");
			console.log(formSearch);
			if (e.target.innerText == "｜上傳補件") {
				formSearch[0].style = "display:none";
				divUpload[0].style = "display:block";
			}
		},
		upLoadFinish() {
			upLoaded()
			function upLoaded() {
				Swal.fire(
					'上傳成功!',
					'',
					'success'
				)
				window.setTimeout(function start() {
					location.replace("./caseSearchMember.html");
				}, 1500)
			}
		},

	},
})
