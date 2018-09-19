class Image < ActiveRecord::Base
  has_attached_file :attachment, styles: { medium: "300x300>" }
  validates_attachment_presence :attachment
  validates_attachment_content_type :attachment, content_type: /\Aimage\/.*\z/
end
