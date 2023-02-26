document.addEventListener('DOMContentLoaded', () => {
	let table = document.querySelector('table'),
		tableHeight = table.offsetHeight - (document.querySelector('caption')).offsetHeight + 'px',
		col1 = document.querySelectorAll('.col-1'),
		col2 = document.querySelectorAll('.col-2'),
		col3 = document.querySelectorAll('.col-3'),
		columns = [ col1, col2, col3 ];

		console.log(tableHeight);

		columns.forEach(column => {
			column.forEach(col => {		
				col.addEventListener('mouseenter', () => {
					column[0].classList.add('pseudo');
					column[0].style.setProperty('--height', tableHeight);
					column[0].style.setProperty('--shadow', '0 5px 4px 3px rgba(0,0,0,0.25)');
				});
				col.addEventListener('mouseleave', () => {
					column[0].classList.remove('pseudo');
				});
			});
		});

	});