#define DllImport   __declspec( dllimport )
#define DllExport   __declspec( dllexport )

#pragma once
#include <Lmcons.h>

using namespace Platform;

namespace UserName
{ 
	DllExport public ref class User sealed
	{
	public:static Platform::String^ getUserName();
	};
}