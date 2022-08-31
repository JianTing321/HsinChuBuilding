Vue.component('page-number', {
	data() {
		return {
			rows: 100,
			currentPage: 1
		}
	},
	methods: {
		// activeBtnA: function (e) { e.classList.add("-active") }
		// (function active() {
		// 	let pageAct = document.querySelector("#activeS");
		// 	pageAct.classList.add("-active");
		// })()

	},
	template: `
        		<template>
						<div class="overflow-auto">
							<div>
								<h6>Small</h6>
								<b-pagination v-model="currentPage" :total-rows="rows" size="sm"></b-pagination>
							</div>

							<div class="mt-3">
								<h6>Default</h6>
								<b-pagination v-model="currentPage" :total-rows="rows"></b-pagination>
							</div>

							<div class="mt-3">
								<h6>Large</h6>
								<b-pagination v-model="currentPage" :total-rows="rows" size="lg"></b-pagination>
							</div>
						</div>
					</template>
            `, //用來定義視覺元件
});
let page = new Vue({
	el: "#page",
	data() {

	}
});

l

