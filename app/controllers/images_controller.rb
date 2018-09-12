class ImagesController < ApplicationController
	def new
		@image = Image.new
	end

	def create
		(params[:attachments] || []).each do |attachment|
			image = Image.new(attachment: attachment)
			image.save
		end
	end
end
