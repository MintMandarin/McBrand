import React, { Component, ErrorInfo, ReactNode } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

interface Props {
    children: ReactNode;
}

interface State {
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

export default class ErrorBoundary extends Component<Props, State> {
    state: State = { error: null, errorInfo: null };

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Caught an error:", error, errorInfo);
        this.logErrorToService(error, errorInfo);

        this.setState({ error, errorInfo });
    }

    logErrorToService(error: Error, errorInfo: ErrorInfo) {
        const errorDetails = {
            message: error.message,
            stack: error.stack,
            componentStack: errorInfo.componentStack,
            developerEmail: "developer@example.com", // Add the developer's email here
        };

        // Replace with actual API call
        console.log("Logging error to service:", JSON.stringify(errorDetails));
    }

    resetError = () => {
        this.setState({ error: null, errorInfo: null });
    };

    render() {
        if (this.state.error) {
            return (
                <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
                    <View style={{ height: 36, padding: 5 }}>
                        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={this.resetError}>
                            <Text style={{ color: "#000000", fontSize: 22 }}>Back</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 16, justifyContent: 'center' }}>
                        <View style={{ backgroundColor: '#EFE9E9', borderRadius: 40, padding: 30 }}>
                            <Text style={{ color: "#000000", fontSize: 28 }}>Oops!</Text>
                            <Text style={{ color: "#000000", fontSize: 18, marginTop: 20 }}>
                                We apologize for the inconvenience.
                            </Text>
                            <Text style={{ color: "#000000", fontSize: 18, marginTop: 5 }}>
                                Our team has been notified, and we're actively working to resolve the issue.
                            </Text>
                            <Text style={{ color: "#000000", fontSize: 18, marginTop: 20 }}>
                                Thank you for using our app, and we appreciate your patience while we address this issue.
                            </Text>
                            <Text style={{ color: "#000000", fontSize: 14, marginTop: 20 }}>
                                If the problem persists, please contact support: developer@example.com
                            </Text>
                            <TouchableOpacity style={{ marginTop: 50, height: 48, backgroundColor: "#FE6E43", borderRadius: 40, alignItems: "center", justifyContent: "center" }} onPress={this.resetError}>
                                <Text style={{ color: "#FFFFFF", fontSize: 16 }}>Go Back</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            );
        }

        return this.props.children;
    }
}
