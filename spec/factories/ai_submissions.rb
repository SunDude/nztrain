# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :ai_submission do
    source "MyText"
    language "MyString"
    user_id 1
    ai_contest_id 1
  end
end
