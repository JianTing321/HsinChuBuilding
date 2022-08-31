Vue.component('section-login', {
	data() {
		return {
			activeBtn: false
		}
	},
	methods: {
		activeBtnA: function (e) { e.classList.add("-active") }
	},
	template: `
        <section class="title ">
			<section class="logo">
				<section class="space main">
					<a href="./caseSearch.html">
							<div class="logoContainer">
							<div class="logo">新竹市建築線</div>
							<div class="logoText">指示(定)線上申請</div>
						</div>	
					</a>					
					<ul>
						<li style="font-Weight:bolder"><span class="status">訪客</span></li>
						<li><span>，您好</span></li>						
						<li><a href="./login.html">登入</a></li>
					</ul>
				</section>
				<div class="containerBox">
					<div class="content">
						<section class="StepTitle">首次登入請先完成以下步驟</section>
						<div class="box main">
							<div class="mdl-card__supporting-text">
								<div class="mdl-stepper-horizontal-alternative">
									<div class="mdl-stepper-step active-step step-done">
										<div class="mdl-stepper-circle" style="background-color: yellow"><span></span></div>
										<div class="mdl-stepper-title" style="color:yellow">更改密碼</div>
										<div class="mdl-stepper-optional"></div>
										<div class="mdl-stepper-bar-left"></div>
										<div class="mdl-stepper-bar-right"></div>
									</div>
									<div class="mdl-stepper-step active-step editable-step">
										<div class="mdl-stepper-circle"><span></span></div>
										<div class="mdl-stepper-title">憑證驗證</div>
										<div class="mdl-stepper-optional"></div>
										<div class="mdl-stepper-bar-left"></div>
										<div class="mdl-stepper-bar-right"></div>
									</div>
										<div class="mdl-stepper-step active-step step-third">
										<div class="mdl-stepper-circle"><span></span></div>
										<div class="mdl-stepper-title">　完成　</div>
										<div class="mdl-stepper-optional"></div>
										<div class="mdl-stepper-bar-left"></div>
										<div class="mdl-stepper-bar-right"></div>
									</div>									
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
            `, //用來定義視覺元件
});
// let app = new Vue({
// 	el: "#headerCheck",
// 	data: {
// 	},
// });



