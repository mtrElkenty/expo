/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#pragma once

#include <math.h>
#include "ABI41_0_0YGEnums.h"
#include "ABI41_0_0YGMacros.h"

#if defined(_MSC_VER) && defined(__clang__)
#define COMPILING_WITH_CLANG_ON_WINDOWS
#endif
#if defined(COMPILING_WITH_CLANG_ON_WINDOWS)
#include <limits>
constexpr float ABI41_0_0YGUndefined = std::numeric_limits<float>::quiet_NaN();
#else
ABI41_0_0YG_EXTERN_C_BEGIN

// Not defined in MSVC++
#ifndef NAN
static const uint32_t __nan = 0x7fc00000;
#define NAN (*(const float*) __nan)
#endif

#define ABI41_0_0YGUndefined NAN
#endif

typedef struct ABI41_0_0YGValue {
  float value;
  ABI41_0_0YGUnit unit;
} ABI41_0_0YGValue;

YOGA_EXPORT extern const ABI41_0_0YGValue ABI41_0_0YGValueAuto;
YOGA_EXPORT extern const ABI41_0_0YGValue ABI41_0_0YGValueUndefined;
YOGA_EXPORT extern const ABI41_0_0YGValue ABI41_0_0YGValueZero;

#if !defined(COMPILING_WITH_CLANG_ON_WINDOWS)
ABI41_0_0YG_EXTERN_C_END
#endif
#undef COMPILING_WITH_CLANG_ON_WINDOWS

#ifdef __cplusplus

inline bool operator==(const ABI41_0_0YGValue& lhs, const ABI41_0_0YGValue& rhs) {
  if (lhs.unit != rhs.unit) {
    return false;
  }

  switch (lhs.unit) {
    case ABI41_0_0YGUnitUndefined:
    case ABI41_0_0YGUnitAuto:
      return true;
    case ABI41_0_0YGUnitPoint:
    case ABI41_0_0YGUnitPercent:
      return lhs.value == rhs.value;
  }

  return false;
}

inline bool operator!=(const ABI41_0_0YGValue& lhs, const ABI41_0_0YGValue& rhs) {
  return !(lhs == rhs);
}

inline ABI41_0_0YGValue operator-(const ABI41_0_0YGValue& value) {
  return {-value.value, value.unit};
}

namespace ABI41_0_0facebook {
namespace yoga {
namespace literals {

inline ABI41_0_0YGValue operator"" _pt(long double value) {
  return ABI41_0_0YGValue{static_cast<float>(value), ABI41_0_0YGUnitPoint};
}
inline ABI41_0_0YGValue operator"" _pt(unsigned long long value) {
  return operator"" _pt(static_cast<long double>(value));
}

inline ABI41_0_0YGValue operator"" _percent(long double value) {
  return ABI41_0_0YGValue{static_cast<float>(value), ABI41_0_0YGUnitPercent};
}
inline ABI41_0_0YGValue operator"" _percent(unsigned long long value) {
  return operator"" _percent(static_cast<long double>(value));
}

} // namespace literals
} // namespace yoga
} // namespace ABI41_0_0facebook

#endif
