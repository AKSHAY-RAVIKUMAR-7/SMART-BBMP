// Multi-language support for SMART BBMP
const translations = {
    en: {
        // Navigation
        home: "Home",
        services: "Services",
        reports: "My Reports",
        profile: "Profile",
        logout: "Logout",
        login: "Login",
        
        // Hero Section
        heroTitle: "Smart Waste Management",
        heroSubtitle: "Report garbage, track collection, and keep Bangalore clean",
        reportGarbageBtn: "Report Garbage",
        trackCollectionBtn: "Track Collection",
        
        // Quick Actions
        quickActions: "Quick Actions",
        reportGarbage: "Report Garbage",
        trackCollection: "Track Collection",
        birthCertificate: "Birth Certificate",
        propertyTax: "Property Tax",
        buildingPermit: "Building Permit",
        tradeLicense: "Trade License",
        
        // Notifications
        notifications: "Notifications",
        garbageCollected: "Garbage collected from your reported location",
        taxDue: "Property tax payment due on",
        certApproved: "Your birth certificate application has been approved",
        viewDetails: "View Details",
        
        // Recent Reports
        recentReports: "Recent Reports",
        reportId: "Report ID",
        location: "Location",
        status: "Status",
        priority: "Priority",
        noReports: "No reports yet",
        
        // Status
        pending: "Pending",
        inProgress: "In Progress",
        completed: "Completed",
        collected: "Collected",
        
        // Priority
        high: "High",
        medium: "Medium",
        low: "Low",
        
        // Driver Management (Admin)
        driverManagement: "Driver Management",
        activeDrivers: "Active Drivers",
        callDriver: "Call",
        messageDriver: "Message",
        trackDriver: "Track",
        driverStatus: {
            active: "Active",
            onRoute: "On Route",
            offDuty: "Off Duty"
        },
        
        // Report Garbage Form
        reportGarbageTitle: "Report Garbage Collection",
        uploadPhotos: "Upload Photos",
        uploadHint: "Click or drag photos here (Max 5 photos)",
        location: "Location",
        detectingLocation: "Detecting your location...",
        wasteType: "Waste Type",
        aiSuggested: "AI-Suggested",
        manualOverride: "You can override AI suggestion",
        selectWasteType: "Select waste type...",
        wasteTypes: {
            wet: "Wet Waste",
            dry: "Dry Waste",
            hazardous: "Hazardous Waste",
            mixed: "Mixed Waste",
            construction: "Construction Debris"
        },
        priorityLevel: "Priority Level",
        description: "Description (Optional)",
        descriptionPlaceholder: "Describe the garbage situation...",
        contactNumber: "Contact Number",
        submitReport: "Submit Report",
        submitting: "Submitting...",
        
        // Login Page
        welcomeBack: "Welcome Back",
        loginSubtitle: "Login to access BBMP services",
        citizenLogin: "Citizen Login",
        adminLogin: "Admin Login",
        driverLogin: "Driver Login",
        username: "Username",
        password: "Password",
        rememberMe: "Remember Me",
        forgotPassword: "Forgot Password?",
        loginButton: "Login",
        
        // Login Form Fields
        adminId: "Admin ID",
        driverId: "Driver ID",
        department: "Department",
        selectDepartment: "Select Department",
        wasteManagementDept: "Waste Management",
        revenueDept: "Revenue Department",
        healthDept: "Health Department",
        engineeringDept: "Engineering Department",
        administrationDept: "Administration",
        vehicleNumber: "Vehicle Number",
        enterAdminId: "Enter your Admin ID",
        enterDriverId: "Enter your Driver ID",
        vehiclePlaceholder: "e.g., KA-01-AB-1234",
        adminAccess: "Admin access - Full system control",
        driverAccess: "Driver access - Route and collection management",
        
        // Login Info Section
        smartWasteSystem: "Smart Waste Management System for Bengaluru. AI-powered garbage collection and route optimization for a cleaner city.",
        systemFeatures: "System Features",
        aiImageRecognition: "AI Image Recognition",
        realtimeGPSTracking: "Real-time GPS Tracking",
        routeOptimizationAI: "Route Optimization",
        citizenReporting: "Citizen Reporting",
        realtimeHeatmaps: "Real-time Heatmaps",
        predictiveAnalytics: "Predictive Analytics",
        demoCredentials: "Demo Credentials",
        user: "User",
        admin: "Admin",
        driver: "Driver",
        
        // Messages
        uploadSuccess: "Photos uploaded successfully",
        locationDetected: "Location detected successfully",
        reportSubmitted: "Report submitted successfully",
        reportSubmittedMsg: "Garbage Report Submitted Successfully!",
        smsNotification: "You will receive SMS updates about the collection status.",
        manualOverrideApplied: "Manual override applied",
        inputMethod: "Input Method",
        priorityMethod: "Priority Method",
        manualInput: "Manual Input",
        aiDetected: "AI-Detected",
        manualSelection: "Manual Selection",
        aiSuggestion: "AI-Suggested",
        roadType: "Road Type",
        
        // Common
        submit: "Submit",
        cancel: "Cancel",
        close: "Close",
        save: "Save",
        edit: "Edit",
        delete: "Delete",
        search: "Search",
        filter: "Filter",
        download: "Download",
        upload: "Upload",
        loading: "Loading...",
        error: "Error",
        success: "Success",
        warning: "Warning",
        info: "Info",
        
        // Services & Cards
        reportNow: "Report Now",
        trackStatus: "Track Status",
        viewRoutes: "View Routes",
        viewHeatmap: "View Heatmap",
        viewSchedule: "View Schedule",
        viewAnalytics: "View Analytics",
        tryAIDemo: "Try AI Demo",
        aiImageAnalysis: "AI Image Analysis",
        
        // Service Titles
        routeOptimization: "Route Optimization",
        garbageHeatmap: "Garbage Heatmap",
        collectionSchedule: "Collection Schedule",
        wasteAnalytics: "Waste Analytics",
        aiPoweredFeatures: "AI-Powered Features",
        
        // Service Descriptions
        uploadPhotos: "Upload photos and location of garbage spots",
        monitorCollection: "Monitor garbage collection schedule in your area",
        aiOptimalRoutes: "AI-powered optimal collection routes",
        visualAnalytics: "Visual analytics of waste concentration areas",
        manageSchedule: "Manage and view collection timings",
        dataInsights: "Data insights and collection statistics",
        aiDescription: "Experience cutting-edge artificial intelligence with smart image recognition, predictive analytics, and 24/7 intelligent chatbot assistance. Transform waste management with machine learning!",
        
        // Smart Features
        smartWasteFeatures: "Smart Waste Management Features",
        realtimeHeatmap: "Real-time Garbage Heatmap",
        heatmapDesc: "Interactive visualization of waste concentration across Bengaluru",
        liveHotspotTracking: "Live garbage hotspot tracking",
        citizenReportingIntegration: "Citizen reporting integration",
        priorityZoneId: "Priority zone identification",
        
        aiRouteOptimization: "AI Route Optimization",
        mlAlgorithms: "Machine learning algorithms for efficient collection routes",
        dynamicRoutePlanning: "Dynamic route planning",
        trafficAwareOptimization: "Traffic-aware optimization",
        fuelEfficiency: "Fuel efficiency maximization",
        
        mobileReporting: "Mobile Garbage Reporting",
        easyReporting: "Easy citizen reporting with GPS and photo upload",
        oneClickCapture: "One-click photo capture",
        autoLocationTag: "Automatic location tagging",
        realtimeUpdates: "Real-time status updates",
        
        // Statistics
        garbageReports: "Garbage Reports",
        collectionTrucks: "Collection Trucks",
        dailyCollections: "Daily Collections",
        routeEfficiency: "% Route Efficiency",
        
        // About Section
        aboutWasteManagement: "About SMART Waste Management",
        aboutDesc1: "BBMP's revolutionary waste management system leverages cutting-edge AI and IoT technologies to optimize garbage collection routes, reduce operational costs, and maintain city cleanliness.",
        aboutDesc2: "Our citizen-centric approach allows real-time garbage reporting with photo uploads and GPS location, enabling data-driven decision making for efficient waste collection across Bengaluru.",
        realtimeTracking: "Real-time Garbage Tracking",
        aiRouteOpt: "AI-Powered Route Optimization",
        citizenPhotoReporting: "Citizen Photo Reporting",
        heatmapAnalytics: "Interactive Heatmap Analytics",
        cleanBengaluru2030: "Clean Bengaluru 2030",
        cleanestCity: "Making Bengaluru the cleanest smart city in India",
        
        // System Management
        systemManagement: "System Management",
        yourServices: "Your Services",
        welcomeBack: "Welcome back",
        administratorAccess: "Administrator Access - Full control over the system",
        citizenAccess: "Citizen Access - Report and track garbage collection"
    },
    
    kn: {
        // Navigation - Kannada
        home: "ಮುಖಪುಟ",
        services: "ಸೇವೆಗಳು",
        reports: "ನನ್ನ ವರದಿಗಳು",
        profile: "ಪ್ರೊಫೈಲ್",
        logout: "ಲಾಗ್ ಔಟ್",
        login: "ಲಾಗಿನ್",
        
        // Hero Section
        heroTitle: "ಸ್ಮಾರ್ಟ್ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ",
        heroSubtitle: "ಕಸವನ್ನು ವರದಿ ಮಾಡಿ, ಸಂಗ್ರಹವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ ಮತ್ತು ಬೆಂಗಳೂರನ್ನು ಸ್ವಚ್ಛವಾಗಿರಿಸಿ",
        reportGarbageBtn: "ಕಸ ವರದಿ ಮಾಡಿ",
        trackCollectionBtn: "ಸಂಗ್ರಹ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
        
        // Quick Actions
        quickActions: "ತ್ವರಿತ ಕ್ರಿಯೆಗಳು",
        reportGarbage: "ಕಸ ವರದಿ ಮಾಡಿ",
        trackCollection: "ಸಂಗ್ರಹ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
        birthCertificate: "ಜನನ ಪ್ರಮಾಣಪತ್ರ",
        propertyTax: "ಆಸ್ತಿ ತೆರಿಗೆ",
        buildingPermit: "ಕಟ್ಟಡ ಅನುಮತಿ",
        tradeLicense: "ವ್ಯಾಪಾರ ಪರವಾನಗಿ",
        
        // Notifications
        notifications: "ಅಧಿಸೂಚನೆಗಳು",
        garbageCollected: "ನಿಮ್ಮ ವರದಿ ಮಾಡಿದ ಸ್ಥಳದಿಂದ ಕಸವನ್ನು ಸಂಗ್ರಹಿಸಲಾಗಿದೆ",
        taxDue: "ಆಸ್ತಿ ತೆರಿಗೆ ಪಾವತಿ ಅವಧಿ",
        certApproved: "ನಿಮ್ಮ ಜನನ ಪ್ರಮಾಣಪತ್ರ ಅರ್ಜಿಯನ್ನು ಅನುಮೋದಿಸಲಾಗಿದೆ",
        viewDetails: "ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
        
        // Recent Reports
        recentReports: "ಇತ್ತೀಚಿನ ವರದಿಗಳು",
        reportId: "ವರದಿ ಐಡಿ",
        location: "ಸ್ಥಳ",
        status: "ಸ್ಥಿತಿ",
        priority: "ಆದ್ಯತೆ",
        noReports: "ಇನ್ನೂ ವರದಿಗಳಿಲ್ಲ",
        
        // Status
        pending: "ಬಾಕಿ ಉಳಿದಿದೆ",
        inProgress: "ಪ್ರಗತಿಯಲ್ಲಿದೆ",
        completed: "ಪೂರ್ಣಗೊಂಡಿದೆ",
        collected: "ಸಂಗ್ರಹಿಸಲಾಗಿದೆ",
        
        // Priority
        high: "ಹೆಚ್ಚು",
        medium: "ಮಧ್ಯಮ",
        low: "ಕಡಿಮೆ",
        
        // Driver Management
        driverManagement: "ಚಾಲಕ ನಿರ್ವಹಣೆ",
        activeDrivers: "ಸಕ್ರಿಯ ಚಾಲಕರು",
        callDriver: "ಕರೆ ಮಾಡಿ",
        messageDriver: "ಸಂದೇಶ",
        trackDriver: "ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
        driverStatus: {
            active: "ಸಕ್ರಿಯ",
            onRoute: "ಮಾರ್ಗದಲ್ಲಿ",
            offDuty: "ಕರ್ತವ್ಯ ರಹಿತ"
        },
        
        // Report Garbage Form
        reportGarbageTitle: "ಕಸ ಸಂಗ್ರಹ ವರದಿ ಮಾಡಿ",
        uploadPhotos: "ಫೋಟೋಗಳನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ",
        uploadHint: "ಫೋಟೋಗಳನ್ನು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಅಥವಾ ಡ್ರ್ಯಾಗ್ ಮಾಡಿ (ಗರಿಷ್ಠ 5 ಫೋಟೋಗಳು)",
        location: "ಸ್ಥಳ",
        detectingLocation: "ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಪತ್ತೆ ಮಾಡಲಾಗುತ್ತಿದೆ...",
        wasteType: "ತ್ಯಾಜ್ಯ ಪ್ರಕಾರ",
        aiSuggested: "AI-ಸೂಚಿಸಲಾಗಿದೆ",
        manualOverride: "ನೀವು AI ಸೂಚನೆಯನ್ನು ಅತಿಕ್ರಮಿಸಬಹುದು",
        selectWasteType: "ತ್ಯಾಜ್ಯ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ...",
        wasteTypes: {
            wet: "ಒದ್ದೆ ತ್ಯಾಜ್ಯ",
            dry: "ಒಣ ತ್ಯಾಜ್ಯ",
            hazardous: "ಅಪಾಯಕಾರಿ ತ್ಯಾಜ್ಯ",
            mixed: "ಮಿಶ್ರ ತ್ಯಾಜ್ಯ",
            construction: "ನಿರ್ಮಾಣ ಅವಶೇಷಗಳು"
        },
        priorityLevel: "ಆದ್ಯತೆ ಮಟ್ಟ",
        description: "ವಿವರಣೆ (ಐಚ್ಛಿಕ)",
        descriptionPlaceholder: "ಕಸದ ಪರಿಸ್ಥಿತಿಯನ್ನು ವಿವರಿಸಿ...",
        contactNumber: "ಸಂಪರ್ಕ ಸಂಖ್ಯೆ",
        submitReport: "ವರದಿಯನ್ನು ಸಲ್ಲಿಸಿ",
        submitting: "ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ...",
        
        // Login Page
        welcomeBack: "ಮತ್ತೆ ಸ್ವಾಗತ",
        loginSubtitle: "BBMP ಸೇವೆಗಳನ್ನು ಪ್ರವೇಶಿಸಲು ಲಾಗಿನ್ ಮಾಡಿ",
        citizenLogin: "ನಾಗರಿಕ ಲಾಗಿನ್",
        adminLogin: "ನಿರ್ವಾಹಕ ಲಾಗಿನ್",
        driverLogin: "ಚಾಲಕ ಲಾಗಿನ್",
        username: "ಬಳಕೆದಾರ ಹೆಸರು",
        password: "ಗುಪ್ತಪದ",
        rememberMe: "ನನ್ನನ್ನು ನೆನಪಿಡಿ",
        forgotPassword: "ಪಾಸ್ವರ್ಡ್ ಮರೆತಿರಾ?",
        loginButton: "ಲಾಗಿನ್",
        
        // Login Form Fields
        adminId: "ನಿರ್ವಾಹಕ ID",
        driverId: "ಚಾಲಕ ID",
        department: "ವಿಭಾಗ",
        selectDepartment: "ವಿಭಾಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        wasteManagementDept: "ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ",
        revenueDept: "ಆದಾಯ ವಿಭಾಗ",
        healthDept: "ಆರೋಗ್ಯ ವಿಭಾಗ",
        engineeringDept: "ಇಂಜಿನಿಯರಿಂಗ್ ವಿಭಾಗ",
        administrationDept: "ಆಡಳಿತ",
        vehicleNumber: "ವಾಹನ ಸಂಖ್ಯೆ",
        enterAdminId: "ನಿಮ್ಮ ನಿರ್ವಾಹಕ ID ನಮೂದಿಸಿ",
        enterDriverId: "ನಿಮ್ಮ ಚಾಲಕ ID ನಮೂದಿಸಿ",
        vehiclePlaceholder: "ಉದಾ., KA-01-AB-1234",
        adminAccess: "ನಿರ್ವಾಹಕ ಪ್ರವೇಶ - ಸಂಪೂರ್ಣ ವ್ಯವಸ್ಥೆ ನಿಯಂತ್ರಣ",
        driverAccess: "ಚಾಲಕ ಪ್ರವೇಶ - ಮಾರ್ಗ ಮತ್ತು ಸಂಗ್ರಹ ನಿರ್ವಹಣೆ",
        
        // Login Info Section
        smartWasteSystem: "ಬೆಂಗಳೂರಿಗೆ ಸ್ಮಾರ್ಟ್ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆ. ಸ್ವಚ್ಛ ನಗರಕ್ಕಾಗಿ AI-ಚಾಲಿತ ಕಸ ಸಂಗ್ರಹ ಮತ್ತು ಮಾರ್ಗ ಆಪ್ಟಿಮೈಸೇಶನ್.",
        systemFeatures: "ವ್ಯವಸ್ಥೆ ವೈಶಿಷ್ಟ್ಯಗಳು",
        aiImageRecognition: "AI ಇಮೇಜ್ ರೆಕಗ್ನಿಷನ್",
        realtimeGPSTracking: "ನೈಜ-ಸಮಯದ GPS ಟ್ರ್ಯಾಕಿಂಗ್",
        routeOptimizationAI: "ಮಾರ್ಗ ಆಪ್ಟಿಮೈಸೇಶನ್",
        citizenReporting: "ನಾಗರಿಕ ವರದಿ",
        realtimeHeatmaps: "ನೈಜ-ಸಮಯದ ಹೀಟ್‌ಮ್ಯಾಪ್‌ಗಳು",
        predictiveAnalytics: "ಪೂರ್ವಗಾಮಿ ವಿಶ್ಲೇಷಣೆ",
        demoCredentials: "ಡೆಮೋ ಪ್ರಮಾಣ ಪತ್ರಗಳು",
        user: "ಬಳಕೆದಾರ",
        admin: "ನಿರ್ವಾಹಕ",
        driver: "ಚಾಲಕ",
        
        // Messages
        uploadSuccess: "ಫೋಟೋಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಅಪ್ಲೋಡ್ ಮಾಡಲಾಗಿದೆ",
        locationDetected: "ಸ್ಥಳವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಪತ್ತೆ ಮಾಡಲಾಗಿದೆ",
        reportSubmitted: "ವರದಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ",
        reportSubmittedMsg: "ಕಸ ವರದಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ!",
        smsNotification: "ಸಂಗ್ರಹ ಸ್ಥಿತಿಯ ಬಗ್ಗೆ ನೀವು SMS ನವೀಕರಣಗಳನ್ನು ಸ್ವೀಕರಿಸುತ್ತೀರಿ.",
        manualOverrideApplied: "ಹಸ್ತಚಾಲಿತ ಅತಿಕ್ರಮಣವನ್ನು ಅನ್ವಯಿಸಲಾಗಿದೆ",
        inputMethod: "ಇನ್ಪುಟ್ ವಿಧಾನ",
        priorityMethod: "ಆದ್ಯತೆ ವಿಧಾನ",
        manualInput: "ಹಸ್ತಚಾಲಿತ ಇನ್ಪುಟ್",
        aiDetected: "AI-ಪತ್ತೆಹಚ್ಚಲಾಗಿದೆ",
        manualSelection: "ಹಸ್ತಚಾಲಿತ ಆಯ್ಕೆ",
        aiSuggestion: "AI-ಸೂಚಿಸಲಾಗಿದೆ",
        roadType: "ರಸ್ತೆ ಪ್ರಕಾರ",
        
        // Common
        submit: "ಸಲ್ಲಿಸಿ",
        cancel: "ರದ್ದುಮಾಡಿ",
        close: "ಮುಚ್ಚಿ",
        save: "ಉಳಿಸಿ",
        edit: "ಸಂಪಾದಿಸಿ",
        delete: "ಅಳಿಸಿ",
        search: "ಹುಡುಕಿ",
        filter: "ಫಿಲ್ಟರ್",
        download: "ಡೌನ್ಲೋಡ್",
        upload: "ಅಪ್ಲೋಡ್",
        loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
        error: "ದೋಷ",
        success: "ಯಶಸ್ಸು",
        warning: "ಎಚ್ಚರಿಕೆ",
        info: "ಮಾಹಿತಿ",
        
        // Services & Cards
        reportNow: "ಈಗ ವರದಿ ಮಾಡಿ",
        trackStatus: "ಸ್ಥಿತಿ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
        viewRoutes: "ಮಾರ್ಗಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
        viewHeatmap: "ಹೀಟ್‌ಮ್ಯಾಪ್ ವೀಕ್ಷಿಸಿ",
        viewSchedule: "ವೇಳಾಪಟ್ಟಿ ವೀಕ್ಷಿಸಿ",
        viewAnalytics: "ವಿಶ್ಲೇಷಣೆ ವೀಕ್ಷಿಸಿ",
        tryAIDemo: "AI ಡೆಮೋ ಪ್ರಯತ್ನಿಸಿ",
        aiImageAnalysis: "AI ಚಿತ್ರ ವಿಶ್ಲೇಷಣೆ",
        
        // Service Titles
        routeOptimization: "ಮಾರ್ಗ ಆಪ್ಟಿಮೈಸೇಶನ್",
        garbageHeatmap: "ಕಸ ಹೀಟ್‌ಮ್ಯಾಪ್",
        collectionSchedule: "ಸಂಗ್ರಹ ವೇಳಾಪಟ್ಟಿ",
        wasteAnalytics: "ತ್ಯಾಜ್ಯ ವಿಶ್ಲೇಷಣೆ",
        aiPoweredFeatures: "AI-ಚಾಲಿತ ವೈಶಿಷ್ಟ್ಯಗಳು",
        
        // Service Descriptions
        uploadPhotos: "ಕಸದ ಸ್ಥಳಗಳ ಫೋಟೋಗಳು ಮತ್ತು ಸ್ಥಳವನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ",
        monitorCollection: "ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಕಸ ಸಂಗ್ರಹ ವೇಳಾಪಟ್ಟಿಯನ್ನು ಮಾನಿಟರ್ ಮಾಡಿ",
        aiOptimalRoutes: "AI-ಚಾಲಿತ ಅತ್ಯುತ್ತಮ ಸಂಗ್ರಹ ಮಾರ್ಗಗಳು",
        visualAnalytics: "ತ್ಯಾಜ್ಯ ಸಾಂದ್ರತೆ ಪ್ರದೇಶಗಳ ದೃಶ್ಯ ವಿಶ್ಲೇಷಣೆ",
        manageSchedule: "ಸಂಗ್ರಹ ಸಮಯಗಳನ್ನು ನಿರ್ವಹಿಸಿ ಮತ್ತು ವೀಕ್ಷಿಸಿ",
        dataInsights: "ಡೇಟಾ ಒಳನೋಟಗಳು ಮತ್ತು ಸಂಗ್ರಹ ಅಂಕಿಅಂಶಗಳು",
        aiDescription: "ಸ್ಮಾರ್ಟ್ ಇಮೇಜ್ ರೆಕಗ್ನಿಷನ್, ಪ್ರೆಡಿಕ್ಟಿವ್ ಅನಾಲಿಟಿಕ್ಸ್ ಮತ್ತು 24/7 ಬುದ್ಧಿವಂತ ಚಾಟ್‌ಬಾಟ್ ಸಹಾಯದೊಂದಿಗೆ ಅತ್ಯಾಧುನಿಕ ಕೃತ್ರಿಮ ಬುದ್ಧಿಮತ್ತೆಯನ್ನು ಅನುಭವಿಸಿ!",
        
        // Smart Features
        smartWasteFeatures: "ಸ್ಮಾರ್ಟ್ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣಾ ವೈಶಿಷ್ಟ್ಯಗಳು",
        realtimeHeatmap: "ನೈಜ-ಸಮಯದ ಕಸ ಹೀಟ್‌ಮ್ಯಾಪ್",
        heatmapDesc: "ಬೆಂಗಳೂರಿನಾದ್ಯಂತ ತ್ಯಾಜ್ಯ ಸಾಂದ್ರತೆಯ ಸಂವಾದಾತ್ಮಕ ದೃಶ್ಯೀಕರಣ",
        liveHotspotTracking: "ಲೈವ್ ಕಸ ಹಾಟ್‌ಸ್ಪಾಟ್ ಟ್ರ್ಯಾಕಿಂಗ್",
        citizenReportingIntegration: "ನಾಗರಿಕ ವರದಿ ಏಕೀಕರಣ",
        priorityZoneId: "ಆದ್ಯತೆ ವಲಯ ಗುರುತಿಸುವಿಕೆ",
        
        aiRouteOptimization: "AI ಮಾರ್ಗ ಆಪ್ಟಿಮೈಸೇಶನ್",
        mlAlgorithms: "ಸಮರ್ಥ ಸಂಗ್ರಹ ಮಾರ್ಗಗಳಿಗೆ ಮಶೀನ್ ಲರ್ನಿಂಗ್ ಅಲ್ಗಾರಿದಮ್‌ಗಳು",
        dynamicRoutePlanning: "ಡೈನಾಮಿಕ್ ಮಾರ್ಗ ಯೋಜನೆ",
        trafficAwareOptimization: "ಟ್ರಾಫಿಕ್-ಅವೇರ್ ಆಪ್ಟಿಮೈಸೇಶನ್",
        fuelEfficiency: "ಇಂಧನ ದಕ್ಷತೆ ಗರಿಷ್ಠೀಕರಣ",
        
        mobileReporting: "ಮೊಬೈಲ್ ಕಸ ವರದಿ",
        easyReporting: "GPS ಮತ್ತು ಫೋಟೋ ಅಪ್ಲೋಡ್‌ನೊಂದಿಗೆ ಸುಲಭ ನಾಗರಿಕ ವರದಿ",
        oneClickCapture: "ಒಂದು ಕ್ಲಿಕ್ ಫೋಟೋ ಕ್ಯಾಪ್ಚರ್",
        autoLocationTag: "ಸ್ವಯಂಚಾಲಿತ ಸ್ಥಳ ಟ್ಯಾಗಿಂಗ್",
        realtimeUpdates: "ನೈಜ-ಸಮಯದ ಸ್ಥಿತಿ ನವೀಕರಣಗಳು",
        
        // Statistics
        garbageReports: "ಕಸ ವರದಿಗಳು",
        collectionTrucks: "ಸಂಗ್ರಹ ಟ್ರಕ್‌ಗಳು",
        dailyCollections: "ದೈನಂದಿನ ಸಂಗ್ರಹಗಳು",
        routeEfficiency: "% ಮಾರ್ಗ ದಕ್ಷತೆ",
        
        // About Section
        aboutWasteManagement: "SMART ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಕುರಿತು",
        aboutDesc1: "BBMP ಯ ಕ್ರಾಂತಿಕಾರಿ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣಾ ವ್ಯವಸ್ಥೆಯು ಕಸ ಸಂಗ್ರಹ ಮಾರ್ಗಗಳನ್ನು ಉತ್ತಮಗೊಳಿಸಲು, ಕಾರ್ಯಾಚರಣೆ ವೆಚ್ಚವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಮತ್ತು ನಗರದ ಶುಚಿತ್ವವನ್ನು ಕಾಪಾಡಲು ಅತ್ಯಾಧುನಿಕ AI ಮತ್ತು IoT ತಂತ್ರಜ್ಞಾನಗಳನ್ನು ಬಳಸುತ್ತದೆ.",
        aboutDesc2: "ನಮ್ಮ ನಾಗರಿಕ-ಕೇಂದ್ರಿತ ವಿಧಾನವು ಫೋಟೋ ಅಪ್ಲೋಡ್‌ಗಳು ಮತ್ತು GPS ಸ್ಥಳದೊಂದಿಗೆ ನೈಜ-ಸಮಯದ ಕಸ ವರದಿಯನ್ನು ಅನುಮತಿಸುತ್ತದೆ.",
        realtimeTracking: "ನೈಜ-ಸಮಯದ ಕಸ ಟ್ರ್ಯಾಕಿಂಗ್",
        aiRouteOpt: "AI-ಚಾಲಿತ ಮಾರ್ಗ ಆಪ್ಟಿಮೈಸೇಶನ್",
        citizenPhotoReporting: "ನಾಗರಿಕ ಫೋಟೋ ವರದಿ",
        heatmapAnalytics: "ಸಂವಾದಾತ್ಮಕ ಹೀಟ್‌ಮ್ಯಾಪ್ ವಿಶ್ಲೇಷಣೆ",
        cleanBengaluru2030: "ಸ್ವಚ್ಛ ಬೆಂಗಳೂರು 2030",
        cleanestCity: "ಬೆಂಗಳೂರನ್ನು ಭಾರತದ ಅತ್ಯಂತ ಸ್ವಚ್ಛವಾದ ಸ್ಮಾರ್ಟ್ ನಗರವನ್ನಾಗಿ ಮಾಡುವುದು",
        
        // System Management
        systemManagement: "ವ್ಯವಸ್ಥೆ ನಿರ್ವಹಣೆ",
        yourServices: "ನಿಮ್ಮ ಸೇವೆಗಳು",
        welcomeBack: "ಮತ್ತೆ ಸ್ವಾಗತ",
        administratorAccess: "ನಿರ್ವಾಹಕ ಪ್ರವೇಶ - ವ್ಯವಸ್ಥೆಯ ಸಂಪೂರ್ಣ ನಿಯಂತ್ರಣ",
        citizenAccess: "ನಾಗರಿಕ ಪ್ರವೇಶ - ಕಸ ಸಂಗ್ರಹವನ್ನು ವರದಿ ಮಾಡಿ ಮತ್ತು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ"
    },
    
    hi: {
        // Navigation - Hindi
        home: "होम",
        services: "सेवाएं",
        reports: "मेरी रिपोर्ट",
        profile: "प्रोफ़ाइल",
        logout: "लॉग आउट",
        login: "लॉगिन",
        
        // Hero Section
        heroTitle: "स्मार्ट कचरा प्रबंधन",
        heroSubtitle: "कचरा रिपोर्ट करें, संग्रह ट्रैक करें और बैंगलोर को स्वच्छ रखें",
        reportGarbageBtn: "कचरा रिपोर्ट करें",
        trackCollectionBtn: "संग्रह ट्रैक करें",
        
        // Quick Actions
        quickActions: "त्वरित कार्य",
        reportGarbage: "कचरा रिपोर्ट करें",
        trackCollection: "संग्रह ट्रैक करें",
        birthCertificate: "जन्म प्रमाण पत्र",
        propertyTax: "संपत्ति कर",
        buildingPermit: "भवन अनुमति",
        tradeLicense: "व्यापार लाइसेंस",
        
        // Notifications
        notifications: "सूचनाएं",
        garbageCollected: "आपके रिपोर्ट किए गए स्थान से कचरा एकत्र किया गया",
        taxDue: "संपत्ति कर भुगतान की नियत तिथि",
        certApproved: "आपका जन्म प्रमाण पत्र आवेदन स्वीकृत हो गया है",
        viewDetails: "विवरण देखें",
        
        // Recent Reports
        recentReports: "हाल की रिपोर्ट",
        reportId: "रिपोर्ट आईडी",
        location: "स्थान",
        status: "स्थिति",
        priority: "प्राथमिकता",
        noReports: "अभी तक कोई रिपोर्ट नहीं",
        
        // Status
        pending: "लंबित",
        inProgress: "प्रगति में",
        completed: "पूर्ण",
        collected: "एकत्र किया गया",
        
        // Priority
        high: "उच्च",
        medium: "मध्यम",
        low: "निम्न",
        
        // Driver Management
        driverManagement: "ड्राइवर प्रबंधन",
        activeDrivers: "सक्रिय ड्राइवर",
        callDriver: "कॉल करें",
        messageDriver: "संदेश",
        trackDriver: "ट्रैक करें",
        driverStatus: {
            active: "सक्रिय",
            onRoute: "मार्ग पर",
            offDuty: "ड्यूटी से बाहर"
        },
        
        // Report Garbage Form
        reportGarbageTitle: "कचरा संग्रह रिपोर्ट करें",
        uploadPhotos: "फ़ोटो अपलोड करें",
        uploadHint: "फ़ोटो यहाँ क्लिक या ड्रैग करें (अधिकतम 5 फ़ोटो)",
        location: "स्थान",
        detectingLocation: "आपका स्थान पता लगाया जा रहा है...",
        wasteType: "कचरे का प्रकार",
        aiSuggested: "AI-सुझाया गया",
        manualOverride: "आप AI सुझाव को ओवरराइड कर सकते हैं",
        selectWasteType: "कचरे का प्रकार चुनें...",
        wasteTypes: {
            wet: "गीला कचरा",
            dry: "सूखा कचरा",
            hazardous: "खतरनाक कचरा",
            mixed: "मिश्रित कचरा",
            construction: "निर्माण मलबा"
        },
        priorityLevel: "प्राथमिकता स्तर",
        description: "विवरण (वैकल्पिक)",
        descriptionPlaceholder: "कचरे की स्थिति का वर्णन करें...",
        contactNumber: "संपर्क नंबर",
        submitReport: "रिपोर्ट जमा करें",
        submitting: "जमा किया जा रहा है...",
        
        // Login Page
        welcomeBack: "वापसी पर स्वागत है",
        loginSubtitle: "BBMP सेवाओं तक पहुंचने के लिए लॉगिन करें",
        citizenLogin: "नागरिक लॉगिन",
        adminLogin: "व्यवस्थापक लॉगिन",
        driverLogin: "ड्राइवर लॉगिन",
        username: "उपयोगकर्ता नाम",
        password: "पासवर्ड",
        rememberMe: "मुझे याद रखें",
        forgotPassword: "पासवर्ड भूल गए?",
        loginButton: "लॉगिन",
        
        // Login Form Fields
        adminId: "व्यवस्थापक ID",
        driverId: "ड्राइवर ID",
        department: "विभाग",
        selectDepartment: "विभाग चुनें",
        wasteManagementDept: "कचरा प्रबंधन",
        revenueDept: "राजस्व विभाग",
        healthDept: "स्वास्थ्य विभाग",
        engineeringDept: "इंजीनियरिंग विभाग",
        administrationDept: "प्रशासन",
        vehicleNumber: "वाहन संख्या",
        enterAdminId: "अपना व्यवस्थापक ID दर्ज करें",
        enterDriverId: "अपना ड्राइवर ID दर्ज करें",
        vehiclePlaceholder: "जैसे, KA-01-AB-1234",
        adminAccess: "व्यवस्थापक पहुंच - पूर्ण सिस्टम नियंत्रण",
        driverAccess: "ड्राइवर पहुंच - मार्ग और संग्रह प्रबंधन",
        
        // Login Info Section
        smartWasteSystem: "बैंगलोर के लिए स्मार्ट कचरा प्रबंधन प्रणाली. स्वच्छ शहर के लिए AI-संचालित कचरा संग्रह और मार्ग अनुकूलन.",
        systemFeatures: "सिस्टम विशेषताएं",
        aiImageRecognition: "AI छवि पहचान",
        realtimeGPSTracking: "वास्तविक समय GPS ट्रैकिंग",
        routeOptimizationAI: "मार्ग अनुकूलन",
        citizenReporting: "नागरिक रिपोर्टिंग",
        realtimeHeatmaps: "वास्तविक समय हीटमैप",
        predictiveAnalytics: "पूर्वानुमान विश्लेषण",
        demoCredentials: "डेमो प्रमाण पत्र",
        user: "उपयोगकर्ता",
        admin: "व्यवस्थापक",
        driver: "ड्राइवर",
        
        // Messages
        uploadSuccess: "फ़ोटो सफलतापूर्वक अपलोड की गईं",
        locationDetected: "स्थान सफलतापूर्वक पता लगाया गया",
        reportSubmitted: "रिपोर्ट सफलतापूर्वक जमा की गई",
        reportSubmittedMsg: "कचरा रिपोर्ट सफलतापूर्वक जमा की गई!",
        smsNotification: "आपको संग्रह स्थिति के बारे में SMS अपडेट प्राप्त होंगे।",
        manualOverrideApplied: "मैनुअल ओवरराइड लागू किया गया",
        inputMethod: "इनपुट विधि",
        priorityMethod: "प्राथमिकता विधि",
        manualInput: "मैनुअल इनपुट",
        aiDetected: "AI-पता लगाया गया",
        manualSelection: "मैनुअल चयन",
        aiSuggestion: "AI-सुझाव",
        roadType: "सड़क प्रकार",
        
        // Common
        submit: "जमा करें",
        cancel: "रद्द करें",
        close: "बंद करें",
        save: "सहेजें",
        edit: "संपादित करें",
        delete: "हटाएं",
        search: "खोजें",
        filter: "फ़िल्टर",
        download: "डाउनलोड",
        upload: "अपलोड",
        loading: "लोड हो रहा है...",
        error: "त्रुटि",
        success: "सफलता",
        warning: "चेतावनी",
        info: "जानकारी",
        
        // Services & Cards
        reportNow: "अभी रिपोर्ट करें",
        trackStatus: "स्थिति ट्रैक करें",
        viewRoutes: "मार्ग देखें",
        viewHeatmap: "हीटमैप देखें",
        viewSchedule: "कार्यक्रम देखें",
        viewAnalytics: "विश्लेषण देखें",
        tryAIDemo: "AI डेमो आज़माएं",
        aiImageAnalysis: "AI छवि विश्लेषण",
        
        // Service Titles
        routeOptimization: "मार्ग अनुकूलन",
        garbageHeatmap: "कचरा हीटमैप",
        collectionSchedule: "संग्रह अनुसूची",
        wasteAnalytics: "कचरा विश्लेषण",
        aiPoweredFeatures: "AI-संचालित विशेषताएं",
        
        // Service Descriptions
        uploadPhotos: "कचरे के स्थानों की फ़ोटो और स्थान अपलोड करें",
        monitorCollection: "अपने क्षेत्र में कचरा संग्रह अनुसूची की निगरानी करें",
        aiOptimalRoutes: "AI-संचालित इष्टतम संग्रह मार्ग",
        visualAnalytics: "कचरे की सघनता वाले क्षेत्रों का दृश्य विश्लेषण",
        manageSchedule: "संग्रह समय प्रबंधित और देखें",
        dataInsights: "डेटा अंतर्दृष्टि और संग्रह आंकड़े",
        aiDescription: "स्मार्ट इमेज रिकग्निशन, प्रेडिक्टिव एनालिटिक्स और 24/7 बुद्धिमान चैटबॉट सहायता के साथ अत्याधुनिक कृत्रिम बुद्धिमत्ता का अनुभव करें!",
        
        // Smart Features
        smartWasteFeatures: "स्मार्ट कचरा प्रबंधन सुविधाएं",
        realtimeHeatmap: "वास्तविक समय कचरा हीटमैप",
        heatmapDesc: "बैंगलोर में कचरे की सघनता का इंटरैक्टिव विज़ुअलाइज़ेशन",
        liveHotspotTracking: "लाइव कचरा हॉटस्पॉट ट्रैकिंग",
        citizenReportingIntegration: "नागरिक रिपोर्टिंग एकीकरण",
        priorityZoneId: "प्राथमिकता क्षेत्र पहचान",
        
        aiRouteOptimization: "AI मार्ग अनुकूलन",
        mlAlgorithms: "कुशल संग्रह मार्गों के लिए मशीन लर्निंग एल्गोरिदम",
        dynamicRoutePlanning: "गतिशील मार्ग योजना",
        trafficAwareOptimization: "ट्रैफ़िक-जागरूक अनुकूलन",
        fuelEfficiency: "ईंधन दक्षता अधिकतमकरण",
        
        mobileReporting: "मोबाइल कचरा रिपोर्टिंग",
        easyReporting: "GPS और फ़ोटो अपलोड के साथ आसान नागरिक रिपोर्टिंग",
        oneClickCapture: "वन-क्लिक फ़ोटो कैप्चर",
        autoLocationTag: "स्वचालित स्थान टैगिंग",
        realtimeUpdates: "वास्तविक समय स्थिति अपडेट",
        
        // Statistics
        garbageReports: "कचरा रिपोर्ट",
        collectionTrucks: "संग्रह ट्रक",
        dailyCollections: "दैनिक संग्रह",
        routeEfficiency: "% मार्ग दक्षता",
        
        // About Section
        aboutWasteManagement: "SMART कचरा प्रबंधन के बारे में",
        aboutDesc1: "BBMP की क्रांतिकारी कचरा प्रबंधन प्रणाली कचरा संग्रह मार्गों को अनुकूलित करने, परिचालन लागत कम करने और शहर की स्वच्छता बनाए रखने के लिए अत्याधुनिक AI और IoT प्रौद्योगिकियों का लाभ उठाती है।",
        aboutDesc2: "हमारा नागरिक-केंद्रित दृष्टिकोण फ़ोटो अपलोड और GPS स्थान के साथ वास्तविक समय कचरा रिपोर्टिंग की अनुमति देता है।",
        realtimeTracking: "वास्तविक समय कचरा ट्रैकिंग",
        aiRouteOpt: "AI-संचालित मार्ग अनुकूलन",
        citizenPhotoReporting: "नागरिक फ़ोटो रिपोर्टिंग",
        heatmapAnalytics: "इंटरैक्टिव हीटमैप विश्लेषण",
        cleanBengaluru2030: "स्वच्छ बैंगलोर 2030",
        cleanestCity: "बैंगलोर को भारत का सबसे स्वच्छ स्मार्ट शहर बनाना",
        
        // System Management
        systemManagement: "प्रणाली प्रबंधन",
        yourServices: "आपकी सेवाएं",
        welcomeBack: "वापसी पर स्वागत है",
        administratorAccess: "प्रशासक पहुंच - सिस्टम पर पूर्ण नियंत्रण",
        citizenAccess: "नागरिक पहुंच - कचरा संग्रह रिपोर्ट और ट्रैक करें"
    }
};

// Language Manager
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('preferredLanguage') || 'en';
    }
    
    setLanguage(lang) {
        if (translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('preferredLanguage', lang);
            this.applyTranslations();
            // Dispatch event for other components to react
            window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
        }
    }
    
    translate(key) {
        const keys = key.split('.');
        let value = translations[this.currentLang];
        
        for (const k of keys) {
            value = value?.[k];
        }
        
        return value || key;
    }
    
    applyTranslations() {
        // Translate all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translate(key);
            
            if (element.hasAttribute('data-translate-placeholder')) {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
    }
    
    getCurrentLanguage() {
        return this.currentLang;
    }
}

// Initialize language manager
const languageManager = new LanguageManager();

// Auto-apply translations on page load
document.addEventListener('DOMContentLoaded', () => {
    languageManager.applyTranslations();
});
