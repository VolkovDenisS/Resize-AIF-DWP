# Resize-AIF-DWP
Allows you to stretch the AIF DWP to fit any screen size

1. You must place the files in the specified paths for DWP and MidTier
   Example MidTier:
   C:\Program Files\BMC Software\ARSystem\midtier\resources\standard\stylesheets
   Files: AIF.css and ResizeAIF.js
   
   Example DWP:
   C:\Program Files\BMC Software\DWP\DWP\dwp\current\app\custom
   File: ARSystem.css
   
2. You must connect the script to index.html on DWP
  Example: C:\Program Files\BMC Software\DWP\DWP\dwp\current\app\index.html
  Add String in end of tag "body" <script src="custom/ResizeAIF.js"></script>
  
3. Clear the browser cache
