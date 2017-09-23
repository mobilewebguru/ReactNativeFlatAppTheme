# [8.0.0](http://gitstrap.com/strapmobile/FlatApp/tags/v8.0.0-CRNA)

#### New Features

*	Integrated Redux Form with Login, SignUp and Forgot Password screens to manage your form state in Redux.
*	Usage of Redux Store to fetch data in Home screen.
*	Added Swipeable list component of NativeBase to Profile screen.
*	Usage of React Native's Flat list in Home screen.
*	Integrated test cases with Jest
	*	Fast interactive watch mode runs only test files related to changed files and is optimized to give signal quickly.
	*	Capture snapshots of React trees or other serializable values to simplify testing and to analyze how state changes over time.
*	Integrated ESlint, linter tool for identifying and reporting on patterns in javascript.
* 	Integrated Flow
	*	A static type checker for javascript
	*	Flow infers types and tracks data as it moves through your code.
*	Integrated Husky
	*	Prevents bad commit, push and more
	*	Builds precommit and other git hooks to run commands within your package.json before a commit is allowed.
*	Integrated Prettier
	*	Reformats and reindents bookmarklet, ugly javascript code.
	*	Removes all original styling and ensures that all outputted code conforms to a consistent style.


#### Upgraded Features

*	Integrated React Navigation
	*	Navigators allow you to define your application's navigation structure. 
	*	Navigators also render common elements such as headers and tab bars which you can configure.
	*	React Navigation includes the following functions to help you create navigators:
		*	StackNavigator
		*	TabNavigator
		*	DrawerNavigator
*	Upgraded NativeBase from 2.1.0-rc.2 to 2.3.1
*	Upgraded React from 15.4.0 to 16.0.0-alpha.12
*	Upgraded React Native from 0.42.3 to 0.47.2
*	Upgraded React Native Easy Grid from 0.1.7 to 0.1.15
*	Upgraded Expo from 15.1.2 to 20.0.2
*	Upgraded Calendar package which includes various customizable react native calendar components.
*	Upgraded Carousel package
*	Other upgraded packages:
	*	color: 0.11.3 to 1.0.3
	*	react-native-modalbox: 1.3.4 to 1.4.2
	*	react-redux: 4.4.5 to 5.0.5
	*	redux: 3.5.2 to 3.7.2
	*	redux-persist: 3.2.2 to 4.8.3
	*	redux-thunk: 2.1.0 to 2.2.0
	*	remote-redux-devtools: 0.3.3 to 0.5.0
	*	remote-redux-devtools-on-debugger: 0.4.6 to 0.8.0
*	Replaced Scrollable tabs by NativeBase tabs in Comments and Channels' screens.
*	Modified structure of the project more efficiently.


#### Bug Fixes

*	Modal fixes in Story screen for Android
*	App design now supports smaller devices