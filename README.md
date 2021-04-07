# Resize-AIF-DWP
Allows you to stretch the AIF DWP to fit any screen size

1. You must place the files in the specified paths for DWP and MidTier
   Example MidTier:
   C:\Program Files\BMC Software\ARSystem\midtier\resources\standard\stylesheets
   Files: AIF.css and ResizeAIF.js
   
   Example DWP:
   C:\Program Files\BMC Software\DWP\DWP\dwp\current\app\custom
   File: ARSystem.css

2. Specify the correct IDs SRDs in the file ResizeAIF.js in location.hash
   Example: location.hash === "#/srm/profile/SRGAA5V0HI2KVAQ36NYJQ287SGYW10/srm"

3. You must connect the script to index.html on DWP
  Example: C:\Program Files\BMC Software\DWP\DWP\dwp\current\app\index.html
  Add String in end of tag "body" <script src="custom/ResizeAIF.js"></script>
  
4. Clear the browser cache
