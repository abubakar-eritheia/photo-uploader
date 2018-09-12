$ ->
	$('#image_attachment').on 'change', (e) ->
		files = @.files
		if !files.length or !window.FileReader
			return
		else
			img_container = $('.frame')
			i = 0
			while i < files.length
				if /^image/.test(files[i].type)

					reader = new FileReader
					reader.readAsDataURL files[i]

					reader.onloadend = ->
						element = '<div class="col-sm-6"><label>"' + files[0].name + '"</label><div class="img-box"><img class="img-fluid" src="' + @result + '" /></div></div>'
						if img_container.find('.row').first().children('.col-sm-6').length > 1
							img_container.prepend('<div class="row"></div>')

						img_container.find('.row').first().prepend element
						return
				i++
		return
