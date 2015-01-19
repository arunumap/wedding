Rails.application.routes.draw do
  root 'public#index'
  get 'rsvp', to: 'public#rsvp', as: :rsvp
  namespace :attendees do

  end

end
