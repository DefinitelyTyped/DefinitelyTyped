del leaflet.d.ts
copy src\*.d.ts *.d.ts.tmp
for %%f in (*.d.ts.tmp) do echo. >> %%f
copy /b *.d.ts.tmp leaflet.d.ts.tmp
findstr /i /v /c:"// " leaflet.d.ts.tmp > leaflet.d.ts
del *.tmp
pause