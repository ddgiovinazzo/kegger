# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
  User.create!(username: 'demo', password:'password', email: 'demo@demo.com', country: 'USA', first_name: 'demo', last_name: 'demo', birthday: DateTime.new(1953,9,14))
