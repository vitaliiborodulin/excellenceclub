module.exports = {
	columns: 12,
	offset: "30px",
	container: {
		maxWidth: "1360px",
		fields: "30px" // Внимание! fields обязан быть >= offset / 2
	},
	breakPoints: {
		xl: {
			width: "1200px"
		},
		lg: {
			width: "992px"
		},
		md: {
			width: "768px",
		},
		sm: {
			width: "576px",
			fields: "20px"
		},
	// 	xxs: {
	// 		width: "320px",
	// 		fields: "15px"
	// 	}
	}
}