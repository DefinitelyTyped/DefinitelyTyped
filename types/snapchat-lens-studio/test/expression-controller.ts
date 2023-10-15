// Typescript rewrite of ExpressionsController.js by Olen Davis <https://github.com/OlenDavis>
// Version: 1.0.0
// Description: Maps blendshape expressions to 3D blendshapes

//  @input Component.BlendShapes blendShapesComponent            {"label":"Blendshapes Component"}

//  @input bool customizeExpressions = false                     {"label":"Customize Expressions"}
// @ui                                                           {"widget":"group_start", "label":"Custom Settings", "showIf" : "customizeExpressions"}

//  @input bool Brows = false                                    {"label" : "Brows", "showIf" : "customizeExpressions"}
// @ui                                                           {"widget":"group_start", "label":"Custom Settings", "showIf" : "Brows"}

//  @input bool BrowsDownLeft = false                            {"showIf" : "Brows"}
// @ui                                                           {"widget":"group_start", "showIf" : "BrowsDownLeft", "label":"Settings"}
//  @input float BrowsDownLeftScale   = 1.0                      {"label": "Scale", "widget":"slider", "min":1.0, "max":2.0, "step":0.01, "showIf" : "BrowsDownLeft"}
//  @input string BrowsDownLeftRename = "BrowsDownLeft"          {"label": "Blendshape", "showIf" : "BrowsDownLeft"}
// @ui                                                           {"widget":"group_end", "showIf" :"BrowsDownLeft"}
// @ui                                                           {"widget":"separator", "showIf" : "BrowsDownLeft"}

//  @input bool BrowsDownRight = false                           {"showIf" : "Brows"}
// @ui                                                           {"widget":"group_start", "showIf" : "BrowsDownRight", "label":"Settings"}
//  @input float BrowsDownRightScale   = 1.0                     {"label": "Scale", "widget":"slider", "min":1.0, "max":2.0, "step":0.01, "showIf" : "BrowsDownRight"}
//  @input string BrowsDownRightRename = "BrowsDownRight"        {"label": "Blendshape", "showIf" : "BrowsDownRight"}
// @ui                                                           {"widget":"group_end", "showIf" : "BrowsDownRight"}
// @ui                                                           {"widget":"separator", "showIf" : "BrowsDownRight"}

//  @input bool BrowsUpCenter = false                            {"showIf" : "Brows"}
// @ui                                                           {"widget":"group_start", "label":"Settings", "showIf" : "BrowsUpCenter"}
//  @input float BrowsUpCenterScale   = 1.0                      {"label": "Scale", "widget":"slider", "min":1.0, "max":2.0, "step":0.01, "showIf" : "BrowsUpCenter"}
//  @input string BrowsUpCenterRename = "BrowsUpCenter"          {"label": "Blendshape", "showIf" : "BrowsUpCenter"}
// @ui                                                           {"widget":"group_end", "showIf" : "BrowsUpCenter"}
// @ui                                                           {"widget":"separator", "showIf" : "BrowsUpCenter"}

//  @input bool BrowsUpLeft = false                              {"showIf" : "Brows"}
// @ui                                                           {"widget":"group_start", "label":"Settings", "showIf" : "BrowsUpLeft"}
//  @input float BrowsUpLeftScale   = 1.0                        {"label": "Scale", "widget":"slider", "min":1.0, "max":2.0, "step":0.01, "showIf" : "BrowsUpLeft"}
//  @input string BrowsUpLeftRename = "BrowsUpLeft"              {"label": "Blendshape", "showIf" : "BrowsUpLeft"}
// @ui                                                           {"widget":"group_end", "showIf" : "BrowsUpLeft"}
// @ui                                                           {"widget":"separator", "showIf" : "BrowsUpLeft"}

//  @input bool BrowsUpRight = false                             {"showIf" : "Brows"}
// @ui                                                           {"widget":"group_start", "label":"Settings", "showIf" : "BrowsUpRight"}
//  @input float BrowsUpRightScale   = 1.0                       {"label": "Scale", "widget":"slider", "min":1.0, "max":2.0, "step":0.01, "showIf" : "BrowsUpRight"}
//  @input string BrowsUpRightRename = "BrowsUpRight"            {"label": "Blendshape", "showIf" : "BrowsUpRight"}
// @ui                                                           {"widget":"group_end", "showIf" : "BrowsUpRight"}

// @ui                                                           {"widget":"group_end", "showIf" : "Brows"}
// @ui                                                           {"widget":"separator"}

//  @input bool Cheeks = false                                   {"label" : "Cheeks", "showIf" : "customizeExpressions"}
// @ui                                                           {"widget":"group_start", "label":"Custom Settings", "showIf" : "Cheeks"}

//  @input bool CheekSquintLeft = false                          {"showIf" : "Cheeks"}
// @ui                                                           {"widget":"group_start", "showIf" : "CheekSquintLeft", "label" : "Settings"}
//  @input float CheekSquintLeftScale   = 1.0                    {"label": "Scale", "showIf": "CheekSquintLeft", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string CheekSquintLeftRename = "CheekSquintLeft"      {"label": "Blendshape", "showIf": "CheekSquintLeft"}
// @ui                                                           {"widget":"group_end", "showIf" : "CheekSquintLeft"}

// @ui                                                           {"widget":"separator", "showIf" : "CheekSquintLeft"}
//  @input bool CheekSquintRight = false                         {"showIf" : "Cheeks"}
// @ui                                                           {"widget":"group_start", "showIf" : "CheekSquintRight", "label" : "Settings"}
//  @input float CheekSquintRightScale   = 1.0                   {"label": "Scale", "showIf": "CheekSquintRight", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string CheekSquintRightRename = "CheekSquintRight"    {"label": "Blendshape", "showIf": "CheekSquintRight"}
// @ui                                                           {"widget":"group_end", "showIf" : "CheekSquintRight"}

// @ui                                                           {"widget":"group_end", "showIf" : "Cheeks"}
// @ui                                                           {"widget":"separator"}

//  @input bool Eyes = false                                     {"label" : "Eyes", "showIf" : "customizeExpressions"}
// @ui                                                           {"widget":"group_start", "label":"Custom Settings", "showIf" : "Eyes"}

//  @input bool EyeBlinkLeft = false                             {"showIf" : "Eyes"}
// @ui                                                           {"widget": "group_start", "showIf" : "EyeBlinkLeft", "label" : "Settings"}
//  @input float EyeBlinkLeftScale   = 1.0                       {"label": "Scale", "showIf": "EyeBlinkLeft", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string EyeBlinkLeftRename = "EyeBlinkLeft"            {"label": "Blendshape", "showIf": "EyeBlinkLeft"}
// @ui                                                           {"widget": "group_end", "showIf": "EyeBlinkLeft"}
// @ui                                                           {"widget":"separator", "showIf": "EyeBlinkLeft"}

//  @input bool EyeBlinkRight = false                            {"showIf" : "Eyes"}
// @ui                                                           {"widget": "group_start", "showIf" : "EyeBlinkRight", "label" : "Settings"}
//  @input float EyeBlinkRightScale = 1.0                        {"label": "Scale", "showIf": "EyeBlinkRight", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string EyeBlinkRightRename = "EyeBlinkRight"          {"label": "Blendshape", "showIf": "EyeBlinkRight"}
// @ui                                                           {"widget": "group_end", "showIf": "EyeBlinkRight"}
// @ui                                                           {"widget":"separator", "showIf": "EyeBlinkRight"}

//  @input bool EyeDownLeft = false                              {"showIf" : "Eyes"}
// @ui                                                           {"widget":"group_start", "showIf" : "EyeDownLeft", "label" : "Settings"}
//  @input float EyeDownLeftScale   = 1.0                        {"label": "Scale", "showIf": "EyeDownLeft", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string EyeDownLeftRename = "EyeDownLeft"              {"label": "Blendshape", "showIf": "EyeDownLeft"}
// @ui                                                           {"widget":"group_end", "showIf": "EyeDownLeft"}
// @ui                                                           {"widget":"separator", "showIf": "EyeDownLeft"}

//  @input bool EyeDownRight = false                             {"showIf" : "Eyes"}
// @ui                                                           {"widget":"group_start", "showIf" : "EyeDownRight", "label" : "Settings"}
//  @input float EyeDownRightScale   = 1.0                       {"label": "Scale", "showIf": "EyeDownRight", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string EyeDownRightRename = "EyeDownRight"            {"label" : "Blendshape", "showIf" : "EyeDownRight"}
// @ui                                                           {"widget": "group_end", "showIf" : "EyeDownRight"}
// @ui                                                           {"widget": "separator", "showIf" :"EyeDownRight"}

//  @input bool EyeInLeft = false                                {"showIf" : "Eyes"}
// @ui                                                           {"widget":"group_start", "showIf" : "EyeInLeft", "label" : "Settings"}
//  @input float EyeInLeftScale   = 1.0                          {"label": "Scale", "showIf": "EyeInLeft", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string EyeInLeftRename = "EyeInLeft"                  {"label": "Blendshape", "showIf": "EyeInLeft"}
// @ui                                                           {"widget":"group_end", "showIf" : "EyeInLeft"}
// @ui                                                           {"widget":"separator", "showIf" : "EyeInLeft"}

//  @input bool EyeInRight = false                               {"showIf" : "Eyes"}
// @ui                                                           {"widget":"group_start", "showIf" : "EyeInRight", "label" : "Settings"}
//  @input float EyeInRightScale   = 1.0                         {"label": "Scale", "showIf": "EyeInRight", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string EyeInRightRename = "EyeInRight"                {"label": "Blendshape", "showIf": "EyeInRight"}
// @ui                                                           {"widget":"group_end", "showIf" : "EyeInRight"}
// @ui                                                           {"widget":"separator", "showIf" : "EyeInRight"}

//  @input bool EyeOpenLeft = false                              {"showIf" : "Eyes"}
// @ui                                                           {"widget":"group_start", "showIf" : "EyeOpenLeft", "label" : "Settings"}
//  @input float EyeOpenLeftScale   = 1.0                        {"label": "Scale", "showIf": "EyeOpenLeft", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string EyeOpenLeftRename = "EyeOpenLeft"              {"label": "Blendshape", "showIf": "EyeOpenLeft"}
// @ui                                                           {"widget":"group_end", "showIf" : "EyeOpenLeft"}
// @ui                                                           {"widget":"separator", "showIf" : "EyeOpenLeft"}

//  @input bool EyeOpenRight = false                             {"showIf" : "Eyes"}
// @ui                                                           {"widget":"group_start", "showIf" : "EyeOpenRight", "label":"Settings"}
//  @input float EyeOpenRightScale   = 1.0                       {"label": "Scale", "showIf": "EyeOpenRight", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string EyeOpenRightRename = "EyeOpenRight"            {"label": "Blendshape", "showIf": "EyeOpenRight"}
// @ui                                                           {"widget":"group_end", "showIf" : "EyeOpenRight"}
// @ui                                                           {"widget":"separator", "showIf":"EyeOpenRight"}

//  @input bool EyeOutLeft = false                               {"showIf" : "Eyes"}
// @ui                                                           {"widget":"group_start", "showIf" : "EyeOutLeft", "label":"Settings"}
//  @input float EyeOutLeftScale   = 1.0                         {"label": "Scale", "showIf": "EyeOutLeft", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string EyeOutLeftRename = "EyeOutLeft"                {"label": "Blendshape", "showIf": "EyeOutLeft"}
// @ui                                                           {"widget":"group_end", "showIf" : "EyeOutLeft"}
// @ui                                                           {"widget":"separator", "showIf":"EyeOutLeft"}

//  @input bool EyeOutRight = false                              {"showIf" : "Eyes"}
// @ui                                                           {"widget":"group_start", "showIf" : "EyeOutRight", "label":"Settings"}
//  @input float EyeOutRightScale   = 1.0                        {"label": "Scale", "showIf": "EyeOutRight", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string EyeOutRightRename = "EyeOutRight"              {"label": "Blendshape", "showIf": "EyeOutRight"}
// @ui                                                           {"widget":"group_end", "showIf" : "EyeOutRight"}
// @ui                                                           {"widget":"separator", "showIf":"EyeOutRight"}

//  @input bool EyeSquintLeft = false
// @ui                                                           {"widget":"group_start", "showIf" : "EyeSquintLeft", "label":"Settings"}
//  @input float EyeSquintLeftScale   = 1.0                      {"label": "Scale", "showIf": "EyeSquintLeft", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string EyeSquintLeftRename = "EyeSquintLeft"          {"label": "Blendshape", "showIf": "EyeSquintLeft"}
// @ui                                                           {"widget":"group_end", "showIf" : "EyeSquintLeft"}
// @ui                                                           {"widget":"separator", "showIf":"EyeSquintLeft"}

//  @input bool EyeSquintRight = false                           {"showIf" : "Eyes"}
// @ui                                                           {"widget":"group_start", "showIf" : "EyeSquintRight", "label":"Settings"}
//  @input float EyeSquintRightScale   = 1.0                     {"label": "Scale", "showIf": "EyeSquintRight", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string EyeSquintRightRename = "EyeSquintLeft"         {"label": "Blendshape", "showIf": "EyeSquintRight"}
// @ui                                                           {"widget":"group_end", "showIf" : "EyeSquintRight"}
// @ui                                                           {"widget":"separator", "showIf":"EyeSquintRight"}

//  @input bool EyeUpLeft = false                                {"showIf" : "Eyes"}
// @ui                                                           {"widget":"group_start", "showIf" : "EyeUpLeft", "label":"Settings"}
//  @input float EyeUpLeftScale   = 1.0                          {"label": "Scale", "showIf": "EyeUpLeft", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string EyeUpLeftRename = "EyeUpLeft"                  {"label": "Blendshape", "showIf": "EyeUpLeft"}
// @ui                                                           {"widget":"group_end", "showIf" : "EyeUpLeft"}
// @ui                                                           {"widget":"separator", "showIf":"EyeUpLeft"}

//  @input bool EyeUpRight = false                               {"showIf" : "Eyes"}
// @ui                                                           {"widget":"group_start", "showIf" : "EyeUpRight", "label":"Settings"}
//  @input float EyeUpRightScale   = 1.0                         {"label": "Scale", "showIf": "EyeUpRight", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string EyeUpRightRename = "EyeUpRight"                {"label": "Blendshape", "showIf": "EyeUpRight"}
// @ui                                                           {"widget":"group_end", "showIf" : "EyeUpRight"}

// @ui                                                           {"widget":"group_end", "showIf" : "Eyes"}
// @ui                                                           {"widget":"separator"}

//  @input bool Jaw = false                                      {"label" : "Jaw", "showIf" : "customizeExpressions"}
// @ui                                                           {"widget":"group_start", "showIf" : "Jaw", "label":"Custom Settings"}

//  @input bool JawForward = false                               {"showIf" : "Jaw"}
// @ui                                                           {"widget":"group_start", "showIf" : "JawForward", "label":"Settings"}
//  @input float JawForwardScale   = 1.0                         {"label": "Scale", "showIf": "JawForward", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string JawForwardRename = "JawForward"                {"label": "Blendshape", "showIf": "JawForward"}
// @ui                                                           {"widget":"group_end", "showIf" : "JawForward"}
// @ui                                                           {"widget":"separator", "showIf" : "JawForward"}

//  @input bool JawLeft = false                                  {"showIf" : "Jaw"}
// @ui                                                           {"widget":"group_start", "showIf" : "JawLeft", "label":"Settings"}
//  @input float JawLeftScale   = 1.0                            {"label": "Scale", "showIf": "JawLeft", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string JawLeftRename = "JawLeft"                      {"label": "Blendshape", "showIf": "JawLeft"}
// @ui                                                           {"widget":"group_end", "showIf" : "JawLeft"}
// @ui                                                           {"widget":"separator", "showIf" : "JawLeft"}

//  @input bool JawRight = false                                 {"showIf" : "Jaw"}
// @ui                                                           {"widget":"group_start", "showIf" : "JawRight", "label":"Settings"}
//  @input float JawRightScale   = 1.0                           {"label": "Scale", "showIf": "JawRight", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string JawRightRename = "JawRight"                    {"label": "Blendshape", "showIf": "JawRight"}
// @ui                                                           {"widget":"group_end", "showIf" : "JawRight"}
// @ui                                                           {"widget":"separator", "showIf" : "JawRight"}

//  @input bool JawOpen = false                                  {"showIf" : "Jaw"}
// @ui                                                           {"widget":"group_start", "showIf" : "JawOpen", "label":"Settings"}
//  @input float JawOpenScale   = 1.0                            {"label": "Scale", "showIf": "JawOpen", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string JawOpenRename = "JawOpen"                      {"label": "Blendshape", "showIf": "JawOpen"}
// @ui                                                           {"widget":"group_end", "showIf" : "JawOpen"}

// @ui                                                           {"widget":"group_end", "showIf" : "Jaw"}
// @ui                                                           {"widget":"separator"}

//  @input bool Lips = false                                     {"label" : "Lips", "showIf" : "customizeExpressions"}
// @ui                                                           {"widget":"group_start", "showIf" : "Lips", "label":"Custom Settings"}

//  @input bool LipsFunnel = false                               {"showIf" : "Lips"}
// @ui                                                           {"widget":"group_start", "showIf" : "LipsFunnel", "label":"Settings"}
//  @input float LipsFunnelScale   = 1.0                         {"label": "Scale", "showIf": "LipsFunnel", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string LipsFunnelRename = "LipsFunnel"                {"label": "Blendshape", "showIf": "LipsFunnel"}
// @ui                                                           {"widget":"group_end", "showIf" : "LipsFunnel"}
// @ui                                                           {"widget":"separator", "showIf" : "LipsFunnel"}

//  @input bool LipsPucker = false                               {"showIf" : "Lips"}
// @ui                                                           {"widget":"group_start", "showIf" : "LipsPucker", "label":"Settings"}
//  @input float LipsPuckerScale   = 1.0                         {"label": "Scale", "showIf": "LipsPucker", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string LipsPuckerRename = "LipsPucker"                {"label": "Blendshape", "showIf": "LipsPucker"}
// @ui                                                           {"widget":"group_end", "showIf" : "LipsPucker"}
// @ui                                                           {"widget":"separator", "showIf" : "LipsPucker"}

//  @input bool LowerLipClose = false                            {"showIf" : "Lips"}
// @ui                                                           {"widget":"group_start", "showIf" : "LowerLipClose", "label":"Settings"}
//  @input float LowerLipCloseScale   = 1.0                      {"label": "Scale", "showIf": "LowerLipClose", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string LowerLipCloseRename = "LowerLipClose"          {"label": "Blendshape", "showIf": "LowerLipClose"}
// @ui                                                           {"widget":"group_end", "showIf" : "LowerLipClose"}
// @ui                                                           {"widget":"separator", "showIf" : "LowerLipClose"}

//  @input bool LowerLipDownLeft = false                         {"showIf" : "Lips"}
// @ui                                                           {"widget":"group_start", "showIf" : "LowerLipDownLeft", "label":"Settings"}
//  @input float LowerLipDownLeftScale   = 1.0                   {"label": "Scale", "showIf": "LowerLipDownLeft", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string LowerLipDownLeftRename = "LowerLipDownLeft"    {"label": "Blendshape", "showIf": "LowerLipDownLeft"}
// @ui                                                           {"widget":"group_end", "showIf" : "LowerLipDownLeft"}
// @ui                                                           {"widget":"separator", "showIf" : "LowerLipDownLeft"}

//  @input bool LowerLipDownRight = false                        {"showIf" : "Lips"}
// @ui                                                           {"widget":"group_start", "showIf" : "LowerLipDownRight", "label":"Settings"}
//  @input float LowerLipDownRightScale   = 1.0                  {"label": "Scale", "showIf": "LowerLipDownRight", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string LowerLipDownRightRename = "LowerLipDownRight"  {"label": "Blendshape", "showIf": "LowerLipDownRight"}
// @ui                                                           {"widget":"group_end", "showIf" : "LowerLipDownRight"}
// @ui                                                           {"widget":"separator", "showIf" : "LowerLipDownRight"}

//  @input bool LowerLipRaise = false                            {"showIf" : "Lips"}
// @ui                                                           {"widget":"group_start", "showIf" : "LowerLipRaise", "label":"Settings"}
//  @input float LowerLipRaiseScale   = 1.0                      {"label": "Scale", "showIf": "LowerLipRaise", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string LowerLipRaiseRename = "LowerLipRaise"          {"label": "Blendshape", "showIf": "LowerLipRaise"}
// @ui                                                           {"widget":"group_end", "showIf" : "LowerLipRaise"}
// @ui                                                           {"widget":"separator", "showIf" : "LowerLipRaise"}

//  @input bool UpperLipClose = false                            {"showIf" : "Lips"}
// @ui                                                           {"widget":"group_start", "showIf" : "UpperLipClose", "label":"Settings"}
//  @input float UpperLipCloseScale   = 1.0                      {"label": "Scale", "showIf": "UpperLipClose", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string UpperLipCloseRename = "UpperLipClose"          {"label": "Blendshape", "showIf": "UpperLipClose"}
// @ui                                                           {"widget":"group_end", "showIf" : "UpperLipClose"}
// @ui                                                           {"widget":"separator", "showIf" : "UpperLipClose"}

//  @input bool UpperLipRaise = false                            {"showIf" : "Lips"}
// @ui                                                           {"widget":"group_start", "showIf" : "UpperLipRaise", "label":"Settings"}
//  @input float UpperLipRaiseScale   = 1.0                      {"label": "Scale", "showIf": "UpperLipRaise", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string UpperLipRaiseRename = "UpperLipRaise"          {"label": "Blendshape", "showIf": "UpperLipRaise"}
// @ui                                                           {"widget":"group_end", "showIf" : "UpperLipRaise"}
// @ui                                                           {"widget":"separator", "showIf" : "UpperLipRaise"}

//  @input bool UpperLipUpLeft = false                           {"showIf" : "Lips"}
// @ui                                                           {"widget":"group_start", "showIf" : "UpperLipUpLeft", "label":"Settings"}
//  @input float UpperLipUpLeftScale   = 1.0                     {"label": "Scale", "showIf": "UpperLipUpLeft", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string UpperLipUpLeftRename = "UpperLipUpLeft"        {"label": "Blendshape", "showIf": "UpperLipUpLeft"}
// @ui                                                           {"widget":"group_end", "showIf" : "UpperLipUpLeft"}
// @ui                                                           {"widget":"separator", "showIf" : "UpperLipUpLeft"}

//  @input bool UpperLipUpRight = false                          {"showIf" : "Lips"}
// @ui                                                           {"widget":"group_start", "showIf" : "UpperLipUpRight", "label":"Settings"}
//  @input float UpperLipUpRightScale   = 1.0                    {"label": "Scale", "showIf": "UpperLipUpRight", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string UpperLipUpRightRename = "UpperLipUpRight"      {"label": "Blendshape", "showIf": "UpperLipUpRight"}
// @ui                                                           {"widget":"group_end", "showIf" : "UpperLipUpRight"}

// @ui                                                           {"widget":"group_end", "showIf" : "Lips"}
// @ui                                                           {"widget":"separator"}

//  @input bool Mouth = false                                    {"label" : "Mouth", "showIf" : "customizeExpressions"}
// @ui                                                           {"widget":"group_start", "showIf" : "Mouth", "label":"Settings"}

//  @input bool MouthClose = false                               {"showIf" : "Mouth"}
// @ui                                                           {"widget":"group_start", "showIf" : "MouthClose", "label":"Settings"}
//  @input float MouthCloseScale   = 1.0                         {"label": "Scale", "showIf": "MouthClose", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string MouthCloseRename = "MouthClose"                {"label": "Blendshape", "showIf": "MouthClose"}
// @ui                                                           {"widget":"group_end", "showIf" : "MouthClose"}
// @ui                                                           {"widget":"separator", "showIf" : "MouthClose"}

//  @input bool MouthDimpleLeft = false                          {"showIf" : "Mouth"}
// @ui                                                           {"widget":"group_start", "showIf" : "MouthDimpleLeft", "label":"Settings"}
//  @input float MouthDimpleLeftScale   = 1.0                    {"label": "Scale", "showIf": "MouthDimpleLeft", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string MouthDimpleLeftRename = "MouthDimpleLeft"      {"label": "Blendshape", "showIf": "MouthDimpleLeft"}
// @ui                                                           {"widget":"group_end", "showIf" : "MouthDimpleLeft"}
// @ui                                                           {"widget":"separator", "showIf" : "MouthDimpleLeft"}

//  @input bool MouthDimpleRight = false                         {"showIf" : "Mouth"}
// @ui                                                           {"widget":"group_start", "showIf" : "MouthDimpleRight", "label":"Settings"}
//  @input float MouthDimpleRightScale   = 1.0                   {"label": "Scale", "showIf": "MouthDimpleRight", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string MouthDimpleRightRename = "MouthDimpleRight"    {"label": "Blendshape", "showIf": "MouthDimpleRight"}
// @ui                                                           {"widget":"group_end", "showIf" : "MouthDimpleRight"}
// @ui                                                           {"widget":"separator", "showIf" : "MouthDimpleRight"}

//  @input bool MouthFrownLeft = false
// @ui                                                           {"widget":"group_start", "showIf" : "MouthFrownLeft", "label":"Settings"}
//  @input float MouthFrownLeftScale   = 1.0                     {"label": "Scale", "showIf": "MouthFrownLeft", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string MouthFrownLeftRename = "MouthFrownLeft"        {"label": "Blendshape", "showIf": "MouthFrownLeft"}
// @ui                                                           {"widget":"group_end", "showIf" : "MouthFrownLeft"}
// @ui                                                           {"widget":"separator", "showIf" : "MouthFrownLeft"}

//  @input bool MouthFrownRight = false                          {"showIf" : "Mouth"}
// @ui                                                           {"widget":"group_start", "showIf" : "MouthFrownRight", "label":"Settings"}
//  @input float MouthFrownRightScale   = 1.0                    {"label": "Scale", "showIf": "MouthFrownRight", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string MouthFrownRightRename = "MouthFrownRight"      {"label": "Blendshape", "showIf": "MouthFrownRight"}
// @ui                                                           {"widget":"group_end", "showIf" : "MouthFrownRight"}
// @ui                                                           {"widget":"separator", "showIf" : "MouthFrownRight"}

//  @input bool MouthLeft = false                                {"showIf" : "Mouth"}
// @ui                                                           {"widget":"group_start", "showIf" : "MouthLeft", "label":"Settings"}
//  @input float MouthLeftScale   = 1.0                          {"label": "Scale", "showIf": "MouthLeft", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string MouthLeftRename = "MouthLeft"                  {"label": "Blendshape", "showIf": "MouthLeft"}
// @ui                                                           {"widget":"group_end", "showIf" : "MouthLeft"}
// @ui                                                           {"widget":"separator", "showIf" : "MouthLeft"}

//  @input bool MouthRight = false                               {"showIf" : "Mouth"}
// @ui                                                           {"widget":"group_start", "showIf" : "MouthRight", "label":"Settings"}
//  @input float MouthRightScale   = 1.0                         {"label": "Scale", "showIf": "MouthRight", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string MouthRightRename = "MouthRight"                {"label": "Blendshape", "showIf": "MouthRight"}
// @ui                                                           {"widget":"group_end", "showIf" : "MouthRight"}
// @ui                                                           {"widget":"separator", "showIf" : "MouthRight"}

//  @input bool MouthSmileLeft = false                           {"showIf" : "Mouth"}
// @ui                                                           {"widget":"group_start", "showIf" : "MouthSmileLeft", "label":"Settings"}
//  @input float MouthSmileLeftScale   = 1.0                     {"label": "Scale", "showIf": "MouthSmileLeft", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string MouthSmileLeftRename = "MouthSmileLeft"        {"label": "Blendshape", "showIf": "MouthSmileLeft"}
// @ui                                                           {"widget":"group_end", "showIf" : "MouthSmileLeft"}
// @ui                                                           {"widget":"separator", "showIf" : "MouthSmileLeft"}

//  @input bool MouthSmileRight = false                          {"showIf" : "Mouth"}
// @ui                                                           {"widget":"group_start", "showIf" : "MouthSmileRight", "label":"Settings"}
//  @input float MouthSmileRightScale   = 1.0                    {"label": "Scale", "showIf": "MouthSmileRight", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string MouthSmileRightRename = "MouthSmileRight"      {"label": "Blendshape", "showIf": "MouthSmileRight"}
// @ui                                                           {"widget":"group_end", "showIf" : "MouthSmileRight"}
// @ui                                                           {"widget":"separator", "showIf" : "MouthSmileRight"}

//  @input bool MouthStretchLeft = false                         {"showIf" : "Mouth"}
// @ui                                                           {"widget":"group_start", "showIf" : "MouthStretchLeft", "label":"Settings"}
//  @input float MouthStretchLeftScale   = 1.0                   {"label": "Scale", "showIf": "MouthStretchLeft", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string MouthStretchLeftRename = "MouthStretchLeft"    {"label": "Blendshape", "showIf": "MouthStretchLeft"}
// @ui                                                           {"widget":"group_end", "showIf" : "MouthStretchLeft"}
// @ui                                                           {"widget":"separator", "showIf" : "MouthStretchLeft"}

//  @input bool MouthStretchRight = false                        {"showIf" : "Mouth"}
// @ui                                                           {"widget":"group_start", "showIf" : "MouthStretchRight", "label":"Settings"}
//  @input float MouthStretchRightScale   = 1.0                  {"label": "Scale", "showIf": "MouthStretchRight", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string MouthStretchRightRename = "MouthStretchRight"  {"label": "Blendshape", "showIf": "MouthStretchRight"}
// @ui                                                           {"widget":"group_end", "showIf" : "MouthStretchRight"}
// @ui                                                           {"widget":"separator", "showIf" : "MouthStretchRight"}

//  @input bool MouthUpLeft = false                              {"showIf" : "Mouth"}
// @ui                                                           {"widget":"group_start", "showIf" : "MouthUpLeft", "label":"Settings"}
//  @input float MouthUpLeftScale   = 1.0                        {"label": "Scale", "showIf": "MouthUpLeft", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string MouthUpLeftRename = "MouthUpLeft"              {"label": "Blendshape", "showIf": "MouthUpLeft"}
// @ui                                                           {"widget":"group_end", "showIf" : "MouthUpLeft"}
// @ui                                                           {"widget":"separator", "showIf" : "MouthUpLeft"}

//  @input bool MouthUpRight = false                             {"showIf" : "Mouth"}
// @ui                                                           {"widget":"group_start", "showIf" : "MouthUpRight", "label":"Settings"}
//  @input float MouthUpRightScale   = 1.0                       {"label": "Scale", "showIf": "MouthUpRight", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string MouthUpRightRename = "MouthUpRight"            {"label": "Blendshape", "showIf": "MouthUpRight"}
// @ui                                                           {"widget":"group_end", "showIf" : "MouthUpRight"}

// @ui                                                           {"widget":"group_end", "showIf" : "Mouth"}
// @ui                                                           {"widget":"separator"}

//  @input bool Face = false                                     {"label": "Face", "showIf" : "customizeExpressions"}
// @ui                                                           {"widget":"group_start", "showIf" : "Face", "label":"Settings"}

//  @input bool Puff = false                                     {"showIf" : "Face"}
// @ui                                                           {"widget":"group_start", "showIf" : "Puff", "label":"Settings"}
//  @input float PuffScale   = 1.0                               {"label": "Scale", "showIf": "Puff", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string PuffRename = "Puff"                            {"label": "Blendshape", "showIf": "Puff"}
// @ui                                                           {"widget":"group_end", "showIf" : "Puff"}

//  @input bool SneerLeft = false                                {"showIf" : "Face"}
// @ui                                                           {"widget":"group_start", "showIf" : "SneerLeft", "label":"Settings"}
//  @input float SneerLeftScale   = 1.0                          {"label": "Scale", "showIf": "SneerLeft", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string SneerLeftRename = "SneerLeft"                  {"label": "Blendshape", "showIf": "SneerLeft"}
// @ui                                                           {"widget":"group_end", "showIf" : "SneerLeft"}

//  @input bool SneerRight = false                               {"showIf" : "Face"}
// @ui                                                           {"widget":"group_start", "showIf" : "SneerRight", "label":"Settings"}
//  @input float SneerRightScale   = 1.0                         {"label": "Scale", "showIf": "SneerRight", "widget":"slider", "min":1.0, "max":2.0, "step":0.01}
//  @input string SneerRightRename = "SneerRight"                {"label": "Blendshape", "showIf": "SneerRight"}
// @ui                                                           {"widget":"group_end", "showIf" : "SneerRight"}

// @ui                                                           {"widget":"group_end", "showIf" : "Face"}

// @ui                                                           {"widget":"group_end"}
// @ui                                                           {"widget":"separator"}

//  @input bool advanced = false
//  @input Component.RenderMeshVisual faceMesh                   {"showIf" : "advanced"}

declare namespace SnapchatLensStudio {
    interface ScriptInputs extends ExpressionInputSet<keyof Expressions> {
        blendShapesComponent: Component.BlendShapes;
        customizeExpressions: boolean;
        Brows: boolean;
        Cheeks: boolean;
        Eyes: boolean;
        Jaw: boolean;
        Lips: boolean;
        Mouth: boolean;
        Face: boolean;
        faceMesh: Component.RenderMeshVisual;
    }
}

const {
    blendShapesComponent,
    customizeExpressions,
    Brows,
    Cheeks,
    Eyes,
    Jaw,
    Lips,
    Mouth,
    Face,
    faceMesh,
    ...expressionConfig
} = script;

type ExpressionInputSet<T extends string> =
    & {
        [K in T]: boolean;
    }
    & {
        [K in T as `${K}Scale`]: number;
    }
    & {
        [K in T as `${K}Rename`]: string;
    };

let expressionNames: Array<keyof Expressions> = new Array();
let expressionWeights: Float32Array;
const blendShapeNames: string[] = new Array();
let isBlendShapesChecked = false;

if (faceMesh) {
    if (!faceMesh.enabled || !faceMesh.getSceneObject().enabled) {
        print(`ExpressionController, ERROR: Please enable '${faceMesh.getSceneObject().name}' Scene Object`);
    }
    if (faceMesh.mesh == null) {
        print(
            `ExpressionController, ERROR: Please set Face Mesh asset for '${faceMesh.getSceneObject().name}' Scene Object`,
        );
    }
} else {
    print("ExpressionController, ERROR: Please define Face Mesh Scene Object in Advanced section");
}

if (!blendShapesComponent) {
    print("ExpressionController, ERROR: Please define Blendshapes component");
}

function checkBlendShapes() {
    for (const name of expressionNames) {
        const blendShapeName = getBlendShapeName(name);
        blendShapeNames.push(blendShapeName);

        if (expressionConfig[name] && !blendShapesComponent.hasBlendShape(blendShapeName)) {
            print("ExpressionController, ERROR: No blendshape with name " + blendShapeName);
        }
    }
}

function getBlendShapeName(name: keyof Expressions) {
    return expressionConfig[`${name}Rename` as const] || name; // tslint:disable-line no-unnecessary-type-assertion
}

function setBlendShapes() {
    for (let i = 0; i < expressionNames.length; i++) {
        const name = expressionNames[i];

        if (expressionConfig[name] == null || typeof expressionConfig[name] === "undefined") {
            continue;
        }

        const blendShapeName = blendShapeNames[i];

        if (blendShapeName && blendShapesComponent.hasBlendShape(blendShapeName)) {
            setExpressionWeight(
                blendShapesComponent,
                blendShapeName,
                i,
                expressionConfig[`${name}Scale` as const], // tslint:disable-line no-unnecessary-type-assertion
            );
        }
    }
}

function setExpressionWeight(
    blendComponent: Component.BlendShapes,
    shapeName: string,
    expressionIndex: number,
    scale: number,
) {
    const appliedScale = scale || 1.0;
    const w = (!!expressionWeights && expressionWeights[expressionIndex] * appliedScale) || 0;
    blendComponent.setBlendShape(shapeName, w);
}

script.createEvent("UpdateEvent").bind(function onUpdate() {
    if (faceMesh && faceMesh.mesh) {
        const faceControl = faceMesh.mesh.control as FaceRenderObjectProvider;
        expressionNames = faceControl.getExpressionNames();
        expressionWeights = faceControl.getExpressionWeights();
    }

    if (expressionNames.length < 1) {
        return;
    }

    if (!isBlendShapesChecked && blendShapesComponent) {
        checkBlendShapes();
        isBlendShapesChecked = true;
    }
    setBlendShapes();
});
