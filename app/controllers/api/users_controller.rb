class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end    
    end

    def search
        ids = params[:user_ids].split(',')
        @users = User.where(id: ids)
            render "/api/users/index"
    end

    def show
        @user = User.find(params[:id])
    end

    private
    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation, :email, :last_name, :first_name, :country, :gender, :location, :birthday)
    end
end
